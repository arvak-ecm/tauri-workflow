import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@shadcn/sidebar'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { useAtomValue } from 'jotai'
import { SidebarSettings } from '@/core/types/sidebar.type'
import { getMenuApp } from '@/app/garra/menu-app'
import SidebarSingleMenu from '@/core/components/sidebar/SidebarSingleMenu'
import SideBarGroupCollapsible from '@/core/components/sidebar/SidebarGroupCollapsible'
import AppSwitcher from '@/core/components/app-switcher'
import SidebarMenuUser from '@/core/components/sidebar/SidebarMenuUser'

const menu = [
  { id: 'home' },
  { id: 'new-case', children: ['new-case'] },
  { id: 'dashboard' },
  { id: 'admin', children: ['admin-users', 'admin-roles'] }
]

function AppSidebar() {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  const menuApp = getMenuApp(menu)

  return (
    <Sidebar
      variant={sidebarSettings.variant}
      side={sidebarSettings.position}
      collapsible={sidebarSettings.collapsible}
    >
      <SidebarHeader>
        <AppSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup key='menu-app'>
          {menuApp.map(item => {
            if (item.type === 'single') {
              return <SidebarSingleMenu menu={item} key={item.id} />
            } else {
              return <SideBarGroupCollapsible className={'group/' + item.id} menu={item} key={item.id} />
            }
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuUser />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
