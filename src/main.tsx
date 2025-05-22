import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { msalConfig } from './core/auth/msal/authConfig'
import { AuthenticationResult, EventMessage, EventType, PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRouter, queryClient } from '@/router.tsx'
import { Provider } from 'jotai'
import { globalStore, HydrateAtoms } from '@/core/atom/store'
import { initialValues } from '@/core/atom/initial-values'
import { RowData } from '@tanstack/react-table'
import { createAppSettingFile } from '@/core/functions/createSettingsFile'

const router = createRouter()
export const msalInstance = new PublicClientApplication(msalConfig)

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

declare module '@tanstack/react-table' {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select'
    align?: 'left' | 'right' | 'center'
  }
}

const initializeStore = async () => {
  await createAppSettingFile()
}

const unsub = router.subscribe('onResolved', async evt => {
  const lastRoute = evt.toLocation.href
  localStorage.setItem('lastRouteUser', lastRoute)
})

const rootElement = document.getElementById('root')!
if (rootElement.innerHTML && rootElement.children.length) {
  const div = document.getElementById('splash') as HTMLDivElement
  if (div) {
    div.style.opacity = '100'
    div.addEventListener(
      'transitionend',
      () => {
        div.style.opacity = '0'

        setTimeout(() => {
          rootElement.innerHTML = ''
          loadApp()
        }, 500)
      },
      { once: true } // se ejecuta solo una vez
    )
  } else {
    rootElement.innerHTML = ''
    loadApp()
  }
}
function loadApp() {
  initializeStore()
  const root = ReactDOM.createRoot(rootElement)
  msalInstance.initialize().then(async () => {
    //await initializeStore()
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
