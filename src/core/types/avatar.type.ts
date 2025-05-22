import { IconMap } from '@/core/components/icons-map'

export interface AvatarPros {
  color: 'gray' | 'color'
  avatar: string
}

export type IconName = keyof typeof IconMap
