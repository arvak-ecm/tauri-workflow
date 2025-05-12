import { invoke } from '@tauri-apps/api/core'
import { start, cancel, onInvalidUrl, onUrl } from '@fabianlars/tauri-plugin-oauth'

const ports = [1430, 1431, 1432]

export async function stopCurrentServer(currentPort: number | null, isRustServer: boolean) {
  if (currentPort !== null) {
    try {
      if (isRustServer) {
        await invoke('stop_server', { port: currentPort })
      } else {
        await cancel(currentPort)
      }
      console.log(`Stopped server on port ${currentPort}`)
    } catch (error) {
      console.error(`Error stopping server: ${error}`)
    }
    currentPort = null
  }
}

export async function startServerRust(currentPort: number | null) {
  console.log(currentPort)
  ports.forEach(async port => {
    await stopCurrentServer(port, false)
  })
  try {
    const port = await invoke<number>('start_server_with_config')
    const isRustServer = true
    console.log(`OAuth server started on port ${port} (Rust)`)
    return {
      port,
      isRustServer
    }
  } catch (error) {
    console.log(`Error starting OAuth server (Rust): ${error}`)
  }
}

export async function startServerTS() {
  //await stopCurrentServer(currentPort, isRustServer)
  try {
    const port = await start()
    //currentPort = port
    console.log(`OAuth server started on port ${port} (TypeScript)`)

    const unlistenUrl = await onUrl(url => {
      console.log('Received OAuth URL:', url)
    })

    const unlistenInvalidUrl = await onInvalidUrl(error => {
      console.error('Received invalid OAuth URL:', error)
    })
    ;(window as any).unlistenFunctions = [unlistenUrl, unlistenInvalidUrl]
  } catch (error) {
    console.log(`Error starting OAuth server (TypeScript): ${error}`)
  }
}
