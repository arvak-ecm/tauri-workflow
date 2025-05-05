import { atom, createStore } from 'jotai'
import { atomWithStorage, useHydrateAtoms } from 'jotai/utils'
import React from 'react'

export const getInicialStateStore = (key: string) => {
  let stored = localStorage.getItem(key)
  return stored !== null ? JSON.parse(stored) : null
}

export const isRustServerAtom = atomWithStorage('isRustServerAtom', false)
export const sidebarIsOpenAtom = atomWithStorage('sidebarIsOpenAtom', getInicialStateStore('sidebarIsOpenAtom'))
export const sidebarSettingsAtom = atomWithStorage('sidebarSettingsAtom', getInicialStateStore('sidebarSettingsAtom'))

export const drawerIsOpen = atomWithStorage('drawerIsOpen', getInicialStateStore('drawerIsOpen'))
export const appSettingsThemeAtom = atomWithStorage('app-settings-theme', getInicialStateStore('app-settings-theme'))

export const typeFormNodes = atom<'NEW' | 'EDIT'>('NEW')
export const tableExportAtom = atom<boolean>(false)
export const tableFilterAtom = atom<boolean>(false)

const HydrateAtoms = ({ initialValues, children }: { initialValues: any; children: React.ReactNode }) => {
  useHydrateAtoms(initialValues)
  return children
}

const globalStore = createStore()

export { globalStore, HydrateAtoms }
