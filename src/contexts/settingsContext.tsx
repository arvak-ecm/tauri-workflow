import { createContext } from 'react'
import type { ReactNode } from 'react'
import type { ThemePreset } from '@/types/theme'
import { defaultThemeState } from '@/config/theme'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getPresetThemeStyles } from '@/utils/theme-presets'
import { ThemeMode, ThemeModeEnum } from '@/data/ThemeMode'
import {
  SidebarCollapsibleEnum,
  SidebarCollapsibleProps,
  SidebarPositionsEnum,
  SidebarPositionsProps,
  SidebarVariantsEnum,
  SidebarVariantsProps
} from '@/data/Sidebar'

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

export type SidebarSettings = {
  sidebar: {
    position: SidebarPositionsProps
    variant: SidebarVariantsProps
    collapsible: SidebarCollapsibleProps
  }
}

export type ModeSettings = {
  mode: ThemeMode
}

export type Settings = ModeSettings & ThemeSettings & SidebarSettings
type SidebarReturn = SidebarSettings['sidebar']
type SettingsContextProps = {
  settings: Settings
  updateSettings: (settings: Partial<Settings>) => void
  applyThemePreset: (preset: string) => void
  resetToDefault: () => void
  hasStateChanged: () => boolean
  getSidebarSettings: () => SidebarReturn | null
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
  },
  sidebar: {
    position: SidebarPositionsEnum.Left,
    variant: SidebarVariantsEnum.Sidebar,
    collapsible: SidebarCollapsibleEnum.Icon
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

  const getSidebarSettings = () => {
    if (!settings || !('sidebar' in settings)) return null
    const { position, variant, collapsible } = (settings as any).sidebar
    return { position, variant, collapsible }
  }

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
        getSidebarSettings,
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
