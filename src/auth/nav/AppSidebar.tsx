import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar'
import { NavUser } from './NavUser'
import { sidebarSettingsAtom } from '@/atom/globals'
import { useAtomValue } from 'jotai'
import { SidebarSettings } from '@/types/sidebar'
import { GalleryVerticalEnd } from 'lucide-react'
import { AppSwitcher } from './app-switcher'
import { getMenuApp } from '@/app/renegociated/menu-app'
import SidebarSingleMenu from '@/components/customizer/SidebarSingleMenu'
import SideBarGroupCollapsible from '@/components/customizer/SidebarGroupCollapsible'

const menu = [
  { id: 'home' },
  { id: 'new-case', children: ['new-grc', 'new-comercials'] },
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
        <AppSwitcher
          apps={[
            {
              name: 'Visación y Curse',
              logo: GalleryVerticalEnd,
              description: 'Grc'
            }
          ]}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup key='menu-app'>
          {menuApp.map(item => {
            if (item.type === 'single') {
              return <SidebarSingleMenu {...item} key={item.id} />
            } else {
              return <SideBarGroupCollapsible className={'group/' + item.id} menu={item} key={item.id} />
            }
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: 'Cardo', email: 'cardo@gmail.com', avatar: 'https://i.pravatar.cc/150?img=1' }} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
