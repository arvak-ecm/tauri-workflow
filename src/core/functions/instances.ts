import { resourceDir } from '@tauri-apps/api/path'
import { Store } from '@tauri-apps/plugin-store'

class StoreTauriFactory {
  static async getInstance(keyStore: string) {
    let path: string
    switch (keyStore) {
      case 'app_settings':
        const dir = await resourceDir()
        path = `${dir}/resources/app_settings.bin`
        break
      default:
        throw new Error(`Unknown store key: ${keyStore}`)
    }
    try {
      const store = await Store.load(path)
      return store
    } catch (error) {
      console.error('Error loading store:', error)
      throw new Error(`Failed to load store: ${error}`)
    }
  }
}
export { StoreTauriFactory }
