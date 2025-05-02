import { atom } from 'jotai'

const dataFilterTableAtom = atom<Record<string, any>[]>([])
const isFilterTableAtom = atom<boolean>(false)

export { dataFilterTableAtom, isFilterTableAtom }
