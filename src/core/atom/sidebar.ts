import { atomWithStorage } from 'jotai/utils'
import { getInicialStateStore } from '@/core/functions/store'

const sidebarIsOpenAtom = atomWithStorage('sidebarIsOpenAtom', getInicialStateStore('sidebarIsOpenAtom'))

const sidebarSettingsAtom = atomWithStorage('sidebarSettingsAtom', getInicialStateStore('sidebarSettingsAtom'))

export { sidebarIsOpenAtom, sidebarSettingsAtom }
