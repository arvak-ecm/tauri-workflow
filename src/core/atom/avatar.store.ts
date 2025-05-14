import { atomWithStorage } from 'jotai/utils'
import { getInicialStateStore } from '@/core/functions/store'
import { AvatarPros } from '@/core/types/avatar.type'

export const avatarAtom = atomWithStorage<AvatarPros>('avatarAtom', getInicialStateStore('avatarAtom'))
