import ReactDOM from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'
import { msalConfig } from './auth/msal/authConfig'
import { AuthenticationResult, EventMessage, EventType, PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRouter, queryClient } from '@/router.tsx'
import { Provider } from 'jotai'
import { globalStore, HydrateAtoms } from './atom/globals'
import { initialValues } from './atom/initial-values'

const router = createRouter()

export const msalInstance = new PublicClientApplication(msalConfig)

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  msalInstance.initialize().then(() => {
    const accounts = msalInstance.getAllAccounts()
    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0])
    }

    msalInstance.addEventCallback((event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult
        const account = payload.account
        /*callMsGraph(payload.accessToken).then(data => {
          console.log(data)
        })*/
        msalInstance.setActiveAccount(account)
      }
      if (event.eventType === EventType.LOGOUT_SUCCESS) {
        //msalInstance.setActiveAccount(null)
      }
    })
    root.render(
      <Provider store={globalStore}>
        <HydrateAtoms initialValues={initialValues}>
          <MsalProvider instance={msalInstance}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </MsalProvider>
        </HydrateAtoms>
      </Provider>
    )
  })
}
