import { BellIcon, LogOutIcon, MoreVerticalIcon, Palette, UserCircleIcon } from 'lucide-react'

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
import { useMsal } from '@azure/msal-react'
import { Link } from '@tanstack/react-router'
import { AvatarDefault } from '@/core/components/AvatarDefault'
import useAvatar from '@/core/hooks/useAvatar'
import { cn } from '@/lib/utils'
import { getInitialsUser } from '@/core/functions/user'

const SidebarMenuUser = () => {
  const { avatar } = useAvatar()
  const { instance, accounts } = useMsal()
  const { isMobile } = useSidebar()

  const handleLogoutRedirect = () => {
    const activeAccount = instance.getAccountByHomeId(accounts[0].homeAccountId)
    if (activeAccount) {
      instance.logoutRedirect({
        account: activeAccount,
        extraQueryParameters: {
          client_info: '1' // 👈 fuerza limpieza más profunda
        }
      })
    } else {
      instance.logoutRedirect({
        postLogoutRedirectUri: '/logout'
      })
    }
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
              <AvatarDefault
                name={avatar.avatar}
                userName={accounts.length > 0 ? getInitialsUser(accounts[0].name!) : undefined}
                className={cn('size-8 rounded-lg', avatar.color === 'gray' ? 'grayscale' : '')}
              />
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>{accounts.length > 0 ? accounts[0].name : 'test'}</span>
                <span className='text-muted-foreground truncate text-xs'>
                  {accounts.length > 0 ? accounts[0].username : 'test'}
                </span>
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
                  userName={accounts.length > 0 ? getInitialsUser(accounts[0].name!) : undefined}
                  className={cn('size-8 rounded-lg', avatar.color === 'gray' ? 'grayscale' : '')}
                />
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>{accounts.length > 0 ? accounts[0].name : 'test'}</span>
                  <span className='text-muted-foreground truncate text-xs'>
                    {accounts.length > 0 ? accounts[0].username : 'test'}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to='/auth/account'>
                  <UserCircleIcon /> Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to='/theme/themes' activeProps={{ className: 'link-active-dropdown' }}>
                  <Palette />
                  Theme
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogoutRedirect}>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

SidebarMenuUser.displayName = 'SidebarMenuUser'
export default SidebarMenuUser
