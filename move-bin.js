import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const ext = process.platform === 'win32' ? '.exe' : ''
const distDir = './db_oxplus/dist'
const outputDir = './src-tauri/binaries'

const rustInfo = execSync('rustc -vV').toString()
const match = /host: (\S+)/.exec(rustInfo)
const targetTriple = match?.[1]

if (!targetTriple) {
  console.error('❌ Failed to determine target triple')
  process.exit(1)
}

const src = path.join(distDir, `db_oxplus${ext}`)
const dest = path.join(outputDir, `db_oxplus-${targetTriple}${ext}`)

fs.mkdirSync(outputDir, { recursive: true })
fs.renameSync(src, dest)

console.log(`✅ Moved to ${dest}`)
