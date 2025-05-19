import { PageInfo } from '@/core/types/reactRouter.type'
import { ItemMenuPerfilProps, MenuPerfilProps, MenuProps, MenuSingle, MenuGroup } from '@/core/types/menu.type'
import { routesCommons } from '@/core/data/apps'

const getSingleMenu = (id: string, menuApp: MenuSingle[]): MenuSingle | undefined => {
  return menuApp.find(item => item.id === id)
}

const getMenuGroup = (menu: ItemMenuPerfilProps, menuApp: MenuProps): MenuGroup | undefined => {
  const group = menuApp.groups?.find(group => group.id === menu.id)
  if (!group || !menu.children) return undefined

  const subMenu: MenuSingle[] = menu.children
    .map(id => getSingleMenu(id, menuApp.single))
    .filter(Boolean) as MenuSingle[]

  return {
    ...group,
    subMenu
  }
}

export async function getMenuApp(menuPerfil: MenuPerfilProps, menuApp: MenuProps): Promise<(MenuSingle | MenuGroup)[]> {
  const lastRoute = (await localStorage.getItem('lastRouteUser')) || ''
  if (isRouteCommons(lastRoute)) {
    menuApp.routeDefault = lastRoute
  }
  return menuPerfil
    .map(item => (item.children ? getMenuGroup(item, menuApp) : getSingleMenu(item.id, menuApp.single)))
    .filter(Boolean) as (MenuSingle | MenuGroup)[]
}

function isRouteCommons(route: string) {
  return routesCommons.includes(route)
}

export function getPageInfo(menu: string): PageInfo {
  const result = storeMenu.find(item => item.id === menu)
  return {
    title: result!.name,
    description: result!.description,
    icon: result!.icon
  }
}
