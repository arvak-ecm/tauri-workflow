import { StoreTauriFactory } from './instances'

export const getInicialStateStore = async (key: string) => {
  try {
    let store = localStorage.getItem(key)
    if (store === null) return getStoreAppSettingFile(key)
    if (store === null) {
      throw new Error(`Store ${key} not found`)
    }
    return JSON.parse(store)
  } catch (error) {
    console.error('getInicialStateStore', error)
    return null
  }
}

export const getStoreAppSettingFile = async (key: string) => {
  try {
    const store = await StoreTauriFactory.getInstance('app_settings')
    const storeKey = key.replace('Atom', '')
    const storeLocal = await store.get(storeKey)
    if (storeLocal !== null) {
      return storeLocal
    } else {
      console.error(`Store local ${key} not found`)
      throw new Error(`Store local ${key} not found`)
    }
  } catch (error) {
    console.error('getStoreAppSettingFile', error)
    return null
  }
}
