import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { ChevronRight, LucideProps } from 'lucide-react'
import React from 'react'

interface Props {
  className?: string
  menu: {
    groupLabel?: string
    title: string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
    menu: {
      name: string
      icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
      href: string
    }[]
  }
}

function SideBarGroupCollapsible({ className, menu }: Props) {
  return (
    <SidebarGroup className={cn('group-data-[collapsible=icon]:hidden', className)}>
      {menu.groupLabel && <SidebarGroupLabel>{menu.groupLabel}</SidebarGroupLabel>}
      <SidebarMenu>
        <Collapsible asChild className='group/collapsible'>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={menu.title}>
                <menu.icon />
                <span>{menu.title}</span>
                <ChevronRight className='group-menu-[state=open]/collapsible:rotate-90 ml-auto transition-transform duration-200' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {menu.menu.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link to={item.href}>
                        <item.icon /> {item.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default SideBarGroupCollapsible
