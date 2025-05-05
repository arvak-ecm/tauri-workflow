import Database from '@tauri-apps/plugin-sql'

const db = await Database.load('jdbc:oracle:thin:@//localhost:1521/FREEPDB1')

export async function getUsers() {
  const result = await db.execute('SELECT * FROM OXP_USER', [])
  return result
}
