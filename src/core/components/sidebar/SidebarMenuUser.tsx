import { MoreVerticalIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@shadcn/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@shadcn/sidebar'
import { Link } from '@tanstack/react-router'
import { AvatarDefault } from '@/core/components/AvatarDefault'
import useAvatar from '@/core/hooks/useAvatar'
import { cn } from '@/lib/utils'
import { memo } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import LucideIcon from '@/components/customizer/LucideIcon'

const SidebarMenuUser = () => {
  const { avatar } = useAvatar()
  const auth = useAuth()
  const handleLogout = useLogout()
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <AvatarDefault
                name={avatar.avatar}
                userName={auth?.initialsName}
                className={cn('size-8 rounded-lg', avatar.color === 'gray' ? 'grayscale' : '')}
                avatarExternalUrl={auth?.avatar}
              />
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>{auth?.userName}</span>
                <span className='text-muted-foreground truncate text-xs'>{auth?.email}</span>
              </div>
              <MoreVerticalIcon className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <AvatarDefault
                  name={avatar.avatar}
                  userName={auth?.initialsName}
                  className={cn('size-8 rounded-lg', avatar.color === 'gray' ? 'grayscale' : '')}
                  avatarExternalUrl={auth?.avatar}
                />
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>{auth?.userName}</span>
                  <span className='text-muted-foreground truncate text-xs'>{auth?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to='/'>
                  <LucideIcon iconName='Info' /> About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to='/auth/account'>
                  <LucideIcon iconName='UserCircle' /> Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LucideIcon iconName='Bell' />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to='/theme/themes' activeProps={{ className: 'link-active-dropdown' }}>
                  <LucideIcon iconName='Palette' />
                  Theme
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LucideIcon iconName='LogOut' />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

SidebarMenuUser.displayName = 'SidebarMenuUser'
export default memo(SidebarMenuUser)
