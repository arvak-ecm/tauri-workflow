import { useClerk } from '@clerk/clerk-react'
import { useMsal } from '@azure/msal-react'
import { useNavigate } from '@tanstack/react-router'

const AUTH_TYPE = import.meta.env.VITE_AUTH_TYPE as 'CLERK' | 'MSAL'

export const useLogout = () => {
  const { signOut } = useClerk()
  const navigate = useNavigate()
  const { instance, accounts } = useMsal()

  const handleLogout = async () => {
    if (AUTH_TYPE === 'CLERK') {
      await signOut()
      navigate({ to: '/auth/clerk/sign-in', replace: true })
    }

    if (AUTH_TYPE === 'MSAL') {
      const activeAccount = instance.getAccountByHomeId(accounts[0]?.homeAccountId)
      if (activeAccount) {
        instance.logoutRedirect({
          account: activeAccount,
          extraQueryParameters: {
            client_info: '1'
          }
        })
      } else {
        instance.logoutRedirect({
          postLogoutRedirectUri: '/logout'
        })
      }
    }
  }

  return handleLogout
}
