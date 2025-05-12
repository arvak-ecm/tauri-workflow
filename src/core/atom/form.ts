import { atom } from 'jotai'

export const typeFormNodes = atom<'NEW' | 'EDIT'>('NEW')
