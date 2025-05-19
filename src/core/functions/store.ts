import { StoreTauriFactory } from './instances'

export const getInicialStateStore = (key: string) => {
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
    const value = await store.get(storeKey)

    if (!value) {
      const msg = `Store local ${key} not found`
      console.error(msg)
      throw new Error(msg)
    }

    if (isValueWrapper(value)) {
      return (value as { value: unknown }).value
    }

    return value
  } catch (error) {
    console.error('getStoreAppSettingFile', error)
    return null
  }
}

function isValueWrapper(obj: any) {
  return typeof obj === 'object' && obj !== null && Object.keys(obj).length === 1 && 'value' in obj
}
