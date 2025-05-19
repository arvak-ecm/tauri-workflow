import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@shadcn/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@shadcn/sidebar'
import useApp from '@/core/hooks/useApp'
import LucideIcon from '@/components/customizer/LucideIcon'
import { useAtomValue } from 'jotai'
import { appListAtom } from '@/core/atom/app.store'
import { AppProps } from '@/core/types/app.type'
import { IconName } from '@/core/components/icons-map'

const AppSwitcher = () => {
  const { appActive } = useApp()
  const appList = useAtomValue<AppProps[]>(appListAtom)

  if (appList.length > 1) {
    return <MultipleAppsSwitcher appList={appList} />
  }
  return <SingleApp appActive={appActive} />
}

const SingleApp: React.FC<{
  appActive: AppProps
}> = ({ appActive }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem className='flex items-center gap-2'>
        <div className='flex aspect-square size-8 items-center justify-center rounded-sm border'>
          <LucideIcon iconName={appActive.logo as IconName} className='text-sidebar-foreground size-4 shrink-0' />
        </div>
        <div className='grid flex-1 text-left text-sm leading-tight'>
          <span className='truncate font-semibold'>{appActive.name}</span>
          <span className='truncate text-xs'>{appActive.description}</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

const MultipleAppsSwitcher: React.FC<{
  appList: AppProps[]
}> = ({ appList }) => {
  const { isMobile } = useSidebar()
  const { appActive, setAppActive } = useApp()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='flex aspect-square size-8 items-center justify-center rounded-sm border'>
                <LucideIcon iconName={appActive.logo as IconName} className='text-sidebar-foreground size-4 shrink-0' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{appActive.name}</span>
                <span className='truncate text-xs'>{appActive.description}</span>
              </div>
              <LucideIcon iconName='ChevronsUpDown' className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-muted-foreground text-xs'>Apps</DropdownMenuLabel>
            {appList.map((app, index) => (
              <DropdownMenuItem key={app.name} onClick={() => setAppActive(app)} className='gap-2 p-2'>
                <div className='flex size-6 items-center justify-center rounded-sm border'>
                  <LucideIcon iconName={app.logo as IconName} className='text-sidebar-foreground size-4 shrink-0' />
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
