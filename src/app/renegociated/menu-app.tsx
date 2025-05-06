import { PageInfo } from '@/core/types/reactRouter'
import { Menu, MenuGroup, MenuItem, MenuSingle } from '@/types/sidebar'

const storeMenuGroup: MenuGroup[] = [
  {
    type: 'group',
    id: 'new-case',
    nameGroup: '',
    name: 'New Case',
    icon: 'layers',
    subMenu: []
  },
  {
    type: 'group',
    id: 'admin',
    nameGroup: '',
    name: 'Admin',
    icon: 'server-cog',
    subMenu: []
  }
]

const storeMenu: MenuSingle[] = [
  {
    type: 'single',
    id: 'home',
    name: 'Cases',
    description: 'List of cases',
    icon: 'home',
    href: '/renegociated/home'
  },
  {
    type: 'single',
    id: 'new-grc',
    name: 'GRC',
    icon: 'book-type',
    href: '/renegociated/new-grc'
  },
  {
    type: 'single',
    id: 'new-comercials',
    name: 'Comercials',
    icon: 'book-a',
    href: '/renegociated/new-comercials'
  },
  {
    type: 'single',
    id: 'dashboard',
    name: 'Dashboard',
    icon: 'layout-dashboard',
    href: '/renegociated/dashboard'
  },
  {
    type: 'single',
    id: 'admin-users',
    name: 'Users',
    icon: 'users',
    href: '/renegociated/admin/users'
  },
  {
    type: 'single',
    id: 'admin-roles',
    name: 'Roles',
    icon: 'shield-user',
    href: '/renegociated/admin/roles'
  }
]

function getSingleMenu(id: string): MenuSingle | undefined {
  return storeMenu.find(item => item.id === id)
}

function getMenuGroup(menu: MenuItem): MenuGroup | undefined {
  const group = storeMenuGroup.find(group => group.id === menu.id)
  if (!group || !menu.children) return undefined

  const subMenu: MenuSingle[] = menu.children.map(id => getSingleMenu(id)).filter(Boolean) as MenuSingle[]

  return {
    ...group,
    subMenu
  }
}

export function getPageInfo(menu: string): PageInfo {
  const result = storeMenu.find(item => item.id === menu)
  return {
    title: result!.name,
    description: result!.description,
    icon: result!.icon
  }
}

export function getMenuApp(menu: Menu): (MenuSingle | MenuGroup)[] {
  return menu.map(item => (item.children ? getMenuGroup(item) : getSingleMenu(item.id))).filter(Boolean) as (
    | MenuSingle
    | MenuGroup
  )[]
}
