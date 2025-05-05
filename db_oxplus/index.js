const command = process.argv[2]
const message = process.argv[3]

switch (command) {
  case 'server':
    if (message === 'START') {
      console.log('🟢 Starting API server...')
      require('./src/server')
    } else if (message === 'STOP') {
      stopServer()
    } else {
      console.error('⚠️ Unknown message. Use START or STOP.')
      process.exit(1)
    }
    break
  default:
    console.error(`❌ Unknown command ${command}`)
    process.exit(1)
}

function stopServer() {
  const fs = require('fs')
  const path = require('path')

  const lockPath = path.join(path.dirname(process.execPath), '.server.lock')

  console.log(lockPath)

  if (!fs.existsSync(lockPath)) {
    console.log('❌ No server lock found. Server is not running.')
    process.exit(1)
  }

  const pid = Number(fs.readFileSync(lockPath, 'utf8'))
  console.log('Trying to kill PID:', pid)

  try {
    process.kill(pid, 'SIGKILL') // fuerza la terminación
    fs.unlinkSync(lockPath)
    console.log(`🛑 Server (PID ${pid}) stopped.`)
  } catch (err) {
    console.error(`❌ Failed to stop server with PID ${pid}:`, err.message)
  }

  process.exit(0)
}
