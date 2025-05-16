import { PageInfo } from '@/core/types/reactRouter.type'
import { Menu, MenuGroup, MenuItem, MenuSingle } from '@/core/types/sidebar.type'

export const storeMenuGroup: MenuGroup[] = [
  {
    type: 'group',
    id: 'new-case',
    nameGroup: '',
    name: 'Cases',
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

export const storeMenu: MenuSingle[] = [
  {
    type: 'single',
    id: 'home',
    name: 'Portal',
    description: 'List of cases',
    icon: 'Home',
    href: '/garra/home'
  },
  {
    type: 'single',
    id: 'new-case',
    name: 'New Case',
    icon: 'BookType',
    href: '/garra/case/$caseId'
  },
  {
    type: 'single',
    id: 'dashboard',
    name: 'Dashboard',
    icon: 'LayoutDashboard',
    href: '/garra/dashboard'
  },
  {
    type: 'single',
    id: 'admin-users',
    name: 'Users',
    icon: 'Users',
    href: '/garra/admin/users'
  },
  {
    type: 'single',
    id: 'admin-roles',
    name: 'Roles',
    icon: 'ShieldUser',
    href: '/garra/admin/roles'
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
