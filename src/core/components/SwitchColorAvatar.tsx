import { Switch } from '@shadcn/switch'
import { Label } from '@shadcn/label'
import useAvatar from '@/core/hooks/useAvatar'

const SwitchColorAvatar = () => {
  const { avatar, setColor } = useAvatar()

  const handleChange = (value: boolean) => {
    if (value) {
      setColor('color')
    } else {
      setColor('gray')
    }
  }

  return (
    <div className='flex flex-row items-center gap-2 text-xs'>
      <Label htmlFor='switch' className='text-muted-foreground text-xs'>
        GrayScale
      </Label>
      <Switch id='switch' checked={avatar.color === 'color'} onCheckedChange={handleChange} />
      <Label htmlFor='switch' className='text-muted-foreground text-xs'>
        ColorScale
      </Label>
    </div>
  )
}

SwitchColorAvatar.displayName = 'SwitchColorAvatar'
export default SwitchColorAvatar
