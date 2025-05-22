import { readFile } from '@tauri-apps/plugin-fs'

async function readFileTipTap(filePath: string) {
  const fileBytes = await readFile(filePath)
  const fileText = new TextDecoder().decode(fileBytes)

  if (filePath.endsWith('.html')) {
    return fileText
  }
  return JSON.parse(fileText)
}

export { readFileTipTap }
