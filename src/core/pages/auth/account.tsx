import { useMsal } from '@azure/msal-react'
import { AvatarDefault } from '@/core/components/AvatarDefault'
import { Button } from '@shadcn/button'
import { Popover, PopoverContent, PopoverTrigger } from '@shadcn/popover'
import useAvatar from '@/core/hooks/useAvatar'
import { cn } from '@/lib/utils'
import ContentPopoverAvatar from '@/core/components/ContentPopoverAvatar'
import { getInitialsUser } from '@/core/functions/user'

const AccountPage: React.FC = () => {
  const { accounts } = useMsal()
  const { avatar } = useAvatar()

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4'>
      <div className='group relative flex items-center justify-center'>
        <AvatarDefault
          name={avatar.avatar}
          className={cn('size-60', avatar.color === 'gray' ? 'grayscale' : '')}
          userName={getInitialsUser(accounts[0].name!)}
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
      <p>{accounts[0].name}</p>
      <p>{accounts[0].username}</p>
    </div>
  )
}

AccountPage.displayName = 'ContactPage'
export default AccountPage
