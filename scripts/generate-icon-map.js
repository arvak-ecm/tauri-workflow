// scripts/generate-icon-map.mjs
import fs from 'fs'
import path from 'path'
import * as icons from 'lucide-react'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const validIcons = Object.entries(icons).filter(([key, val]) => /^[A-Z]/.test(key) && typeof val === 'function')

console.log('Iconos válidos:', validIcons.length)

const iconEntries = Object.entries(icons)
  .filter(([key]) => /^[A-Z]/.test(key))
  .map(([name]) => `  ${name}: ${name},`)
  .join('\n')

const imports = Object.keys(icons)
  .filter(key => /^[A-Z]/.test(key))
  .join(',\n')

const content = `import {
${imports}
} from 'lucide-react';

export const IconMap = {
${iconEntries}
};

export type IconName = keyof typeof IconMap;
`

const outputPath = path.join(__dirname, '../src/core/components/icons-map.ts')
fs.writeFileSync(outputPath, content)
console.log(`✅ icons-map.ts generado en ${outputPath}`)
