import { atom } from 'jotai'

const tableExportAtom = atom<boolean>(false)
const tableFilterAtom = atom<boolean>(false)

const dataFilterTableAtom = atom<Record<string, any>[]>([])
const isFilterTableAtom = atom<boolean>(false)

export { dataFilterTableAtom, isFilterTableAtom, tableExportAtom, tableFilterAtom }
