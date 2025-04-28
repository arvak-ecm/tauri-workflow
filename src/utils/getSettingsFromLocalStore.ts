import { ModeSettings } from '@/contexts/settingsContext'
import { ThemeModeEnum } from '@/data/ThemeMode'

const defaultSettings: ModeSettings = {
  mode: ThemeModeEnum.Light
}

export const getSettingsFromLocalStore = async (): Promise<ModeSettings> => {
  try {
    const data = localStorage.getItem('app-settings-theme')
    const settings = data ? JSON.parse(data) : {}

    if (!settings.mode) {
      //localStorage.setItem('theme', JSON.stringify(defaultSettings))
      return defaultSettings
    }

    try {
      return JSON.parse(settings.value) as ModeSettings
    } catch {
      return defaultSettings
    }
  } catch {
    return defaultSettings
  }
}
