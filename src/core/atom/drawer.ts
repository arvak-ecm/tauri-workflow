import { atomWithStorage } from 'jotai/utils'
import { getInicialStateStore } from '@/core/functions/store'

export const drawerIsOpen = atomWithStorage('drawerIsOpen', getInicialStateStore('drawerIsOpen'))
