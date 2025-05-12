import { cn } from '@/lib/utils'
import SwitchColorAvatar from './SwitchColorAvatar'
import { avatars, getSrcAvatar } from '@/core/data/avatars'
import useAvatar from '@/core/hooks/useAvatar'

const ContentPopoverAvatar = () => {
  const { avatar, setAvatar } = useAvatar()

  const handleChange = (value: string) => {
    setAvatar(value)
  }

  return (
    <section className='flex flex-col items-center justify-center gap-2 p-4'>
      <SwitchColorAvatar />
      <main className='flex flex-row flex-wrap justify-center gap-2'>
        {avatars.map(item => (
          <button
            key={item}
            className={cn(
              'size-20 rounded-full transition duration-200',
              'hover:ring-primary hover:ring-2',
              avatar.color === 'gray' ? 'grayscale' : '',
              item === avatar.avatar && 'ring-primary ring-2'
            )}
            onClick={() => handleChange(item)}
          >
            <img src={getSrcAvatar(item)} alt={item} className='avatar avatar-0' />
          </button>
        ))}
      </main>
    </section>
  )
}

ContentPopoverAvatar.displayName = 'ContentPopoverAvatar'
export default ContentPopoverAvatar
