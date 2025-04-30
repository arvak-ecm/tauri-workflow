import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'
import { NavUser } from './NavUser'
import { useTheme } from '@/providers/ThemesProvider'
import NavAdmin from './NavAdmin'

function AppSidebar() {
  const { getSidebarSettings } = useTheme()
  return (
    <Sidebar
      variant={getSidebarSettings()?.variant}
      side={getSidebarSettings()?.position}
      collapsible={getSidebarSettings()?.collapsible}
    >
      <SidebarHeader />
      <SidebarContent>
        <NavAdmin />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: 'Cardo', email: 'cardo@gmail.com', avatar: 'https://i.pravatar.cc/150?img=1' }} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
