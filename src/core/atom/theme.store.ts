import { atomWithStorage } from 'jotai/utils'
import { getInicialStateStore } from '@/core/functions/store'

export const appSettingsThemeAtom = atomWithStorage('app-settings-theme', getInicialStateStore('app-settings-theme'))
