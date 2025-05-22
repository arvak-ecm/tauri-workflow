import { Editor } from '@tiptap/react'
import { atom } from 'jotai'

export const tiptapEditorAtom = atom<Editor | null>(null)
