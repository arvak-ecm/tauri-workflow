import { ModeSettings } from '@/contexts/settingsContext'
import { ThemeMode, ThemeModeEnum } from '@/data/ThemeMode'

export const getMode = async (): Promise<ThemeMode> => {
  try {
    const data = localStorage.getItem('app-settings-theme')
    const theme = data ? JSON.parse(data) : {}

    if (!theme.mode) return ThemeModeEnum.Light

    try {
      const parsedSettings = JSON.parse(theme) as ModeSettings
      return parsedSettings.mode || ThemeModeEnum.Light
    } catch {
      return ThemeModeEnum.Light
    }
  } catch {
    return ThemeModeEnum.Light
  }
}
