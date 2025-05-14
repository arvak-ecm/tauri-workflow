import { PageInfo } from '@/core/types/reactRouter.type'
import { Menu, MenuGroup, MenuItem, MenuSingle } from '@/core/types/sidebar.type'
import { useMemo } from 'react'

const storeMenu: MenuSingle[] = []
const storeMenuGroup: Omit<MenuGroup, 'subMenu'>[] = []

export function useMenuApp(menu: Menu) {
  const getSingleMenu = (id: string): MenuSingle | undefined => {
    return storeMenu.find(item => item.id === id)
  }

  const getMenuGroup = (menu: MenuItem): MenuGroup | undefined => {
    const group = storeMenuGroup.find(group => group.id === menu.id)
    if (!group || !menu.children) return undefined

    const subMenu: MenuSingle[] = menu.children.map(id => getSingleMenu(id)).filter(Boolean) as MenuSingle[]

    return {
      ...group,
      subMenu
    }
  }

  const getPageInfo = (menuId: string): PageInfo | undefined => {
    const result = storeMenu.find(item => item.id === menuId)
    if (!result) return undefined
    return {
      title: result.name,
      description: result.description,
      icon: result.icon
    }
  }

  const menuApp = useMemo(() => {
    return menu.map(item => (item.children ? getMenuGroup(item) : getSingleMenu(item.id))).filter(Boolean) as (
      | MenuSingle
      | MenuGroup
    )[]
  }, [menu, storeMenu, storeMenuGroup])

  return {
    menuApp,
    getPageInfo
  }
}
