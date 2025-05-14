import { atomWithStorage } from 'jotai/utils'
import { getInicialStateStore } from '@/core/functions/store'
import type { AppProps } from '@/core/types/app.type'

export const appActiveAtom = atomWithStorage<AppProps>('appActiveAtom', getInicialStateStore('appActiveAtom'))
