import { useAtom } from 'jotai'
import { avatarAtom } from '@/core/atom/avatar.store'

function useAvatar() {
  const [avatar, setAvatarState] = useAtom(avatarAtom)

  const setAvatar = (newAvatar: string) => {
    setAvatarState(prev => ({ ...prev, avatar: newAvatar }))
  }

  const setColor = (newColor: 'gray' | 'color') => {
    setAvatarState(prev => ({ ...prev, color: newColor }))
  }

  return {
    avatar,
    setAvatar,
    setColor
  }
}

export default useAvatar
