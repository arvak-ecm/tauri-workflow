import { Command } from '@tauri-apps/plugin-shell'

export async function startServerOracle() {
  const message = 'START'
  const command = Command.sidecar('binaries/db_oxplus', ['server', message])
  command.execute()
}
