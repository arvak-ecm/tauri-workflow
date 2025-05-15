import { getInicialStateStore } from '@/core/functions/store'
import type { AppProps } from '@/core/types/app.type'
import { atomWithStorage } from 'jotai/utils'

export const appActiveAtom = atomWithStorage<AppProps>('appActiveAtom', getInicialStateStore('appActiveAtom'))

export const appMenuActiveAtom = atomWithStorage<string[]>(
  'appMenuActiveAtom',
  getInicialStateStore('appMenuActiveAtom')
)
