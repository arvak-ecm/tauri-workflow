import { AvatarDefault } from '@/core/components/AvatarDefault'
import { Button } from '@shadcn/button'
import { Popover, PopoverContent, PopoverTrigger } from '@shadcn/popover'
import useAvatar from '@/core/hooks/useAvatar'
import { cn } from '@/lib/utils'
import ContentPopoverAvatar from '@/core/components/ContentPopoverAvatar'
import { useAuth } from '@/hooks/useAuth'
import { UserProfile } from '@clerk/clerk-react'

const AUTH_TYPE = import.meta.env.VITE_AUTH_TYPE as 'MSAL' | 'CLERK'

const AccountPage: React.FC = () => {
  const auth = useAuth()
  const { avatar } = useAvatar()

  if (AUTH_TYPE === 'CLERK') return <UserProfile />

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4'>
      <div className='group relative flex items-center justify-center'>
        <AvatarDefault
          name={avatar.avatar}
          className={cn('size-40', avatar.color === 'gray' ? 'grayscale' : '')}
          userName={auth?.initialsName}
          avatarExternalUrl={auth?.avatar}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size='sm'
              className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              )}
            >
              Change
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-130'>
            <ContentPopoverAvatar />
          </PopoverContent>
        </Popover>
      </div>
      <p>{auth?.userName}</p>
      <p>{auth?.email}</p>
    </div>
  )
}

AccountPage.displayName = 'ContactPage'
export default AccountPage
