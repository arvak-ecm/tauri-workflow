import { createContext } from 'react'
import type { ReactNode } from 'react'
import type { ThemePreset } from '@/core/types/theme.type'
import { defaultThemeState } from '@/core/config/theme'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getPresetThemeStyles } from '@/core/utils/theme-presets'
import { ThemeMode, ThemeModeEnum } from '@/core/data/ThemeMode'

export type ThemeType = {
  preset?: string | null
  styles?: ThemePreset
}

export type ThemeSettings = {
  theme: ThemeType
  savedThemes?: Array<{
    name: string
    styles: ThemePreset
  }>
}

export type ModeSettings = {
  mode: ThemeMode
}

export type Settings = ModeSettings & ThemeSettings
type SettingsContextProps = {
  settings: Settings
  updateSettings: (settings: Partial<Settings>) => void
  applyThemePreset: (preset: string) => void
  resetToDefault: () => void
  hasStateChanged: () => boolean
}

type Props = {
  children: ReactNode
  mode?: ThemeMode
}

// ─────────────────────────────────────────────────────────────────────────────

// Initial State
const initialSettings: Settings = {
  mode: ThemeModeEnum.Light,
  theme: {
    preset: null,
    styles: defaultThemeState
  }
}

// Context
export const SettingsContext = createContext<SettingsContextProps | null>(null)

// Provider
export const SettingsProvider = ({ children, mode }: Props) => {
  const [settings, setSettings] = useLocalStorage<Settings>('app-settings-theme', {
    ...initialSettings,
    mode: mode ?? ThemeModeEnum.Light
  })

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }))
  }

  const applyThemePreset = (preset: string) => {
    setSettings(prev => ({
      ...prev,
      theme: {
        ...prev.theme,
        preset,
        styles: getPresetThemeStyles(preset)
      }
    }))
  }

  const resetToDefault = () => {
    setSettings(prev => ({
      ...initialSettings,
      savedThemes: prev.savedThemes
    }))
  }

  const hasStateChanged = () => {
    return JSON.stringify(settings.theme.styles) !== JSON.stringify(initialSettings.theme.styles)
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        applyThemePreset,
        resetToDefault,
        hasStateChanged
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
