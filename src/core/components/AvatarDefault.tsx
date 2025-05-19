import React from 'react'
import { getSrcAvatar } from '@/core/data/avatars'
import { Avatar, AvatarFallback } from '@shadcn/avatar'
import { motion, AnimatePresence } from 'framer-motion'
interface Props {
  name: string
  userName?: string
  className?: string
  avatarExternalUrl?: string
}

export const AvatarDefault: React.FC<Props> = ({ name, userName = 'NF', className, avatarExternalUrl }) => {
  let avatar = getSrcAvatar(name)
  if (avatarExternalUrl) {
    avatar = avatarExternalUrl
  }
  return (
    <Avatar className={className}>
      <AnimatePresence mode='wait'>
        <motion.img
          key={avatar}
          src={avatar}
          className='absolute h-full w-full rounded-full object-cover'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <AvatarFallback>{userName}</AvatarFallback>
    </Avatar>
  )
}
