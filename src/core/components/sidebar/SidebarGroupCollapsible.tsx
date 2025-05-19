import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@shadcn/collapsible'
import { SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from '@shadcn/sidebar'
import usePageInfo from '@/hooks/usePageInfo'
import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import LucideIcon from '@/components/customizer/LucideIcon'
import { cn } from '@/lib/utils'
import { IconName } from '@/core/components/icons-map'
import { MenuGroup, MenuSingle } from '@/core/types/menu.type'

interface Props {
  className?: string
  menu: MenuGroup
}

function existMenuTitle(menu: MenuGroup, menuTitle: string) {
  const exist = menu.subMenu?.filter(item => item.name === menuTitle)[0]
  return exist ? '/' + menuTitle : ''
}

const SideBarGroupCollapsible: React.FC<Props> = ({ className, menu }) => {
  const pageInfo = usePageInfo()
  return (
    <>
      {menu.nameGroup && <SidebarGroupLabel>{menu.nameGroup}</SidebarGroupLabel>}
      <SidebarMenu>
        <Collapsible asChild className={cn('group/collapsible', className)}>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={menu.name + existMenuTitle(menu, pageInfo.title)}>
                {menu.icon && <LucideIcon iconName={menu.icon as IconName} className='text-sidebar-foreground' />}
                <span>{menu.name}</span>
                <ChevronRight className='group-menu-[state=open]/collapsible:rotate-90 ml-auto transition-transform duration-200' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {menu.subMenu?.map((item: MenuSingle, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link to={item.href} activeProps={{ className: 'link-active-collapsible' }}>
                        {item.icon && (
                          <LucideIcon iconName={item.icon as IconName} className='text-sidebar-foreground' />
                        )}
                        {item.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </>
  )
}

SideBarGroupCollapsible.displayName = 'SideBarGroupCollapsible'
export default SideBarGroupCollapsible
