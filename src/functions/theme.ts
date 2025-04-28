import { Settings } from '@/contexts/settingsContext'
import { ThemeStyleProps } from '@/types/theme'

// Helper function to ensure both themes are updated together
export function updateBothThemes(settings: Settings, updates: Partial<ThemeStyleProps>) {
  const currentLight = settings.theme.styles?.light || {}
  const currentDark = settings.theme.styles?.dark || {}

  const updatedSettings = {
    ...settings,
    theme: {
      ...settings.theme,
      styles: {
        light: { ...currentLight, ...updates },
        dark: { ...currentDark, ...updates }
      }
    }
  }

  return updatedSettings
}
