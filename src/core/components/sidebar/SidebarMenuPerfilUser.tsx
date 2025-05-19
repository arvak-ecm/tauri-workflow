import { SidebarGroup } from '@/components/ui/sidebar'
import { appMenuActiveAtom } from '@/core/atom/app.store'
import { getMenuApp } from '@/core/functions/menuApp'
import { MenuGroup, MenuProps, MenuSingle } from '@/core/types/menu.type'
import { useAtomValue } from 'jotai'
import SidebarSingleMenu from './SidebarSingleMenu'
import SideBarGroupCollapsible from './SidebarGroupCollapsible'
import { memo, useEffect, useState } from 'react'
import { useRouter } from '@tanstack/react-router'

const menu = [
  { id: 'home' },
  { id: 'new-case', children: ['new-case'] },
  { id: 'dashboard' },
  { id: 'admin', children: ['admin-users', 'admin-roles'] }
]

const SidebarMenuPerfilUser = () => {
  const router = useRouter()
  const appMenuActive = useAtomValue<MenuProps>(appMenuActiveAtom)
  const [menuBuilder, setMenuBuilder] = useState<(MenuSingle | MenuGroup)[]>([])

  useEffect(() => {
    const buildMenuAndNavigate = async () => {
      const menuBuilder = await getMenuApp(menu, appMenuActive)
      setMenuBuilder(menuBuilder)
      router.navigate({ to: appMenuActive.routeDefault })
    }
    buildMenuAndNavigate()
  }, [appMenuActive])

  return (
    <SidebarGroup>
      {menuBuilder.map(item => {
        if (item.type === 'single') {
          return <SidebarSingleMenu menu={item} key={item.id} />
        } else {
          return <SideBarGroupCollapsible className={'group/' + item.id} menu={item} key={item.id} />
        }
      })}
    </SidebarGroup>
  )
}

SidebarMenuPerfilUser.displayName = 'SidebarMenuPerfilUser'
export default memo(SidebarMenuPerfilUser)
