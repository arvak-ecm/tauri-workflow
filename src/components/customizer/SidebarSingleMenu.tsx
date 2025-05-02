import { Link } from '@tanstack/react-router'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { MenuSingle } from '@/types/sidebar'
import LucideIcon from './LucideIcon'

function SidebarSingleMenu(menu: MenuSingle) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={menu.name} asChild>
          <Link to={menu.href} activeProps={{ className: 'link-active-collapsible' }}>
            {menu.icon && <LucideIcon iconName={menu.icon} className='text-sidebar-foreground' />}
            <span>{menu.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default SidebarSingleMenu
