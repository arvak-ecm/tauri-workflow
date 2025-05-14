import { Link } from '@tanstack/react-router'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@shadcn/sidebar'
import { MenuSingle } from '@/core/types/sidebar.type'
import LucideIcon from '@components/customizer/LucideIcon'

const SidebarSingleMenu: React.FC<{ menu: MenuSingle }> = ({ menu }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={menu.name} asChild>
          <Link to={menu.href} activeProps={{ className: 'link-active-collapsible' }}>
            {menu.icon && <LucideIcon iconName={menu.icon} className='text-sidebar-foreground' />}
            {menu.name}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

SidebarSingleMenu.displayName = 'SidebarSingleMenu'
export default SidebarSingleMenu
