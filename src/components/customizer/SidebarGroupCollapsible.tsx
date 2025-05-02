import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub
} from '@/components/ui/sidebar'
import usePageInfo from '@/hooks/usePageInfo'
import { MenuGroup, MenuSingle } from '@/types/sidebar'
import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import LucideIcon from './LucideIcon'

interface Props {
  className?: string
  menu: MenuGroup
}

function existMenuTitle(menu: MenuGroup, menuTitle: string) {
  const exist = menu.subMenu?.filter(item => item.name === menuTitle)[0]
  return exist ? '/' + menuTitle : ''
}

function SideBarGroupCollapsible({ className, menu }: Props) {
  const pageInfo = usePageInfo()
  console.log(menu)
  return (
    <>
      {menu.nameGroup && <SidebarGroupLabel>{menu.nameGroup}</SidebarGroupLabel>}
      <SidebarMenu>
        <Collapsible asChild className='group/collapsible'>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={menu.name + existMenuTitle(menu, pageInfo.title)}>
                {menu.icon && <LucideIcon iconName={menu.icon} className='text-sidebar-foreground' />}
                <span>{menu.name}</span>
                <ChevronRight className='group-menu-[state=open]/collapsible:rotate-90 ml-auto transition-transform duration-200' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {menu.subMenu?.map((item: MenuSingle, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link className='' to={item.href} activeProps={{ className: 'link-active-collapsible' }}>
                        {item.icon && <LucideIcon iconName={item.icon} className='text-sidebar-foreground' />}
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

export default SideBarGroupCollapsible
