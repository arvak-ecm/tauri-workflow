import { IconName } from '@/core/components/icons-map'

export interface MenuGroup {
  type: 'group'
  id: string
  nameGroup: string
  name: string
  icon: IconName
  subMenu?: MenuSingle[]
}

export interface MenuSingle {
  type: 'single'
  id: string
  name: string
  description?: string
  icon: IconName
  href: string
}

export type MenuProps = {
  routeDefault: string
  groups?: MenuGroup[]
  single: MenuSingle[]
}

export type ItemMenuPerfilProps = {
  id: string
  children?: string[]
}

export type MenuPerfilProps = ItemMenuPerfilProps[]
