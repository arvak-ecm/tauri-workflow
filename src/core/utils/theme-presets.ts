import type { ThemeStyles } from '@/core/types/theme'
import { defaultThemeState } from '@/core/config/theme'
import dataPresets from '@/core/data/theme-presets.json'

export function getPresetThemeStyles(name: string): ThemeStyles {
  if (name === 'default') {
    return defaultThemeState
  }
  const preset = presets[name]
  if (!preset) {
    return defaultThemeState
  }
  return {
    light: {
      ...defaultThemeState.light,
      ...(preset.light || {})
    },
    dark: {
      ...defaultThemeState.dark,
      ...(preset.dark || {})
    },
    css: preset.css || {}
  }
}

export const presets: Record<string, ThemeStyles> = dataPresets
