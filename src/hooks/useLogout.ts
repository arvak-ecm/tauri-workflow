import { useMsal } from '@azure/msal-react'

const AUTH_TYPE = import.meta.env.VITE_AUTH_TYPE as 'CLERK' | 'MSAL'

export const useLogout = () => {
  const { instance, accounts } = useMsal()

  const handleLogout = async () => {
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
