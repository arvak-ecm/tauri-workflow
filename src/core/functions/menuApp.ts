import { StoreTauriFactory } from '@/core/functions/instances'
import { PageInfo } from '@/core/types/reactRouter.type'
import { Menu, MenuGroup, MenuItem, MenuSingle } from '@/core/types/sidebar.type'
import { AppProps } from '../types/app.type'

const getSingleMenu = (id: string, storeMenu: MenuSingle[]): MenuSingle | undefined => {
  return storeMenu.find(item => item.id === id)
}

const getMenuGroup = (
  menu: MenuItem,
  menuDefault: {
    storeMenu: MenuSingle[]
    storeMenuGroup: MenuGroup[]
  }
): MenuGroup | undefined => {
  const group = menuDefault.storeMenuGroup.find(group => group.id === menu.id)
  if (!group || !menu.children) return undefined

  const subMenu: MenuSingle[] = menu.children
    .map(id => getSingleMenu(id, menuDefault.storeMenu))
    .filter(Boolean) as MenuSingle[]

  return {
    ...group,
    subMenu
  }
}

export async function getMenuApp(menu: Menu, app: AppProps): Promise<(MenuSingle | MenuGroup)[]> {
  const store = await StoreTauriFactory.getInstance('app_settings')
  const storeMenu = await store.get<{
    storeMenu: MenuSingle[]
    storeMenuGroup: MenuGroup[]
  }>(`menu_${app.id}`)

  return menu
    .map(item => (item.children ? getMenuGroup(item, storeMenu) : getSingleMenu(item.id, menuDefault.storeMenu)))
    .filter(Boolean) as (MenuSingle | MenuGroup)[]
}

export function getPageInfo(menu: string): PageInfo {
  const result = storeMenu.find(item => item.id === menu)
  return {
    title: result!.name,
    description: result!.description,
    icon: result!.icon
  }
}
