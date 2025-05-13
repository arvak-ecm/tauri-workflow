import { ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@shadcn/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@shadcn/sidebar'
import { useState } from 'react'

const apps = [
  {
    id: 'garra',
    name: 'Visación y Curse',
    logo: GalleryVerticalEnd,
    description: 'Grc'
  },
  {
    id: 'docubuilder',
    name: 'Docu Builder',
    logo: GalleryVerticalEnd,
    description: 'Generate document templates'
  }
]

const AppSwitcher = () => {
  const [activeTeam] = useState(apps[0])
  if (!activeTeam) {
    return null
  }
  if (apps.length > 1) {
    return <MultipleAppsSwitcher />
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem className='flex items-center gap-2'>
        <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
          <activeTeam.logo className='size-4' />
        </div>
        <div className='grid flex-1 text-left text-sm leading-tight'>
          <span className='truncate font-semibold'>{activeTeam.name}</span>
          <span className='truncate text-xs'>{activeTeam.description}</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

const MultipleAppsSwitcher = () => {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = useState(apps[0])
  if (!activeTeam) {
    return null
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                <activeTeam.logo className='size-4' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{activeTeam.name}</span>
                <span className='truncate text-xs'>{activeTeam.description}</span>
              </div>
              <ChevronsUpDown className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-muted-foreground text-xs'>Apps</DropdownMenuLabel>
            {apps.map((app, index) => (
              <DropdownMenuItem key={app.name} onClick={() => setActiveTeam(app)} className='gap-2 p-2'>
                <div className='flex size-6 items-center justify-center rounded-sm border'>
                  <app.logo className='size-4 shrink-0' />
                </div>
                {app.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
AppSwitcher.displayName = 'AppSwitcher'
export default AppSwitcher
