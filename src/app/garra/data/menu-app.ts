import { MenuGroup, MenuSingle } from '@/core/types/sidebar.type'

const storeMenuGroup: MenuGroup[] = [
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

const storeMenu: MenuSingle[] = [
  {
    type: 'single',
    id: 'home',
    name: 'Portal',
    description: 'List of cases',
    icon: 'home',
    href: '/garra/home'
  },
  {
    type: 'single',
    id: 'new-case',
    name: 'New Case',
    icon: 'book-type',
    href: '/garra/case/$caseId'
  },
  {
    type: 'single',
    id: 'dashboard',
    name: 'Dashboard',
    icon: 'layout-dashboard',
    href: '/garra/dashboard'
  },
  {
    type: 'single',
    id: 'admin-users',
    name: 'Users',
    icon: 'users',
    href: '/garra/admin/users'
  },
  {
    type: 'single',
    id: 'admin-roles',
    name: 'Roles',
    icon: 'shield-user',
    href: '/garra/admin/roles'
  }
]

export const menuApp = {
  storeMenu,
  storeMenuGroup
}
