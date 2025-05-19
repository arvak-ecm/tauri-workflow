import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@shadcn/sidebar'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { useAtomValue } from 'jotai'
import { SidebarSettings } from '@/core/types/sidebar.type'
import AppSwitcher from '@/core/components/app-switcher'
import SidebarMenuUser from '@/core/components/sidebar/SidebarMenuUser'
import SidebarMenuPerfilUser from '@/core/components/sidebar/SidebarMenuPerfilUser'
import { memo } from 'react'

const AppSidebar = () => {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
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
        <SidebarMenuPerfilUser />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuUser />
      </SidebarFooter>
    </Sidebar>
  )
}

AppSidebar.displayName = 'AppSidebar'
export default memo(AppSidebar)
