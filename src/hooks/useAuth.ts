import { useMemo } from 'react'
import { useMsal } from '@azure/msal-react'
import { useUser as useClerkUser } from '@clerk/clerk-react'
import { getInitialsUser } from '@/core/functions/user'

const AUTH_TYPE = import.meta.env.VITE_AUTH_TYPE as 'MSAL' | 'CLERK'

interface AuthUser {
  userName: string
  initialsName: string
  email: string
  avatar?: string
}

export const useAuth = (): AuthUser | null => {
  const { accounts } = useMsal()
  const { user: clerkUser } = useClerkUser()

  return useMemo(() => {
    if (AUTH_TYPE === 'MSAL') {
      const msalUser = accounts[0]
      if (!msalUser) return null

      const name = msalUser.name ?? ''
      const initials = getInitialsUser(name)

      return {
        userName: name,
        initialsName: initials,
        email: msalUser.username
      }
    }

    if (AUTH_TYPE === 'CLERK') {
      if (!clerkUser) return null

      const name = `${clerkUser.firstName ?? ''} ${clerkUser.lastName ?? ''}`.trim()
      const initials = getInitialsUser(name)
      const avatar = clerkUser.imageUrl.toString()

      return {
        userName: name,
        initialsName: initials,
        email: clerkUser.emailAddresses[0]?.emailAddress ?? '',
        avatar
      }
    }

    return null
  }, [accounts, clerkUser])
}
