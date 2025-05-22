import { getInitialsUser } from '@/core/functions/user'
import { useMsal } from '@azure/msal-react'
import { useMemo } from 'react'
import { fakeAccount } from '../core/data/auth'

const authActivated = import.meta.env.VITE_AUTH_ACTIVATED === 'true'

interface AuthUser {
  userName: string
  initialsName: string
  email: string
  avatar?: string
}

export const useAuth = (): AuthUser | null => {
  const { accounts } = useMsal()
  return useMemo(() => {
    if (!authActivated) {
      accounts.push(fakeAccount)
      return {
        userName: fakeAccount.name,
        initialsName: getInitialsUser(fakeAccount.name),
        email: fakeAccount.username
      }
    } else {
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
  }, [accounts])
}
