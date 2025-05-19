import { getInicialStateStore } from '@/core/functions/store'
import type { AppProps } from '@/core/types/app.type'
import { atomWithStorage } from 'jotai/utils'
import { MenuProps } from '@/core/types/menu.type'

export const appListAtom = atomWithStorage<AppProps[]>('appListAtom', getInicialStateStore('appListAtom'))

export const appActiveAtom = atomWithStorage<AppProps>('appActiveAtom', getInicialStateStore('appActiveAtom'))

export const appMenuActiveAtom = atomWithStorage<MenuProps>(
  'appMenuActiveAtom',
  getInicialStateStore('appMenuActiveAtom')
)
