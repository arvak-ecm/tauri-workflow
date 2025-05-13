import { createRootRouteWithContext } from '@tanstack/react-router'
import '@/styles/global.css'

import { ThemeProvider } from '@/core/providers/ThemesProvider'
import { SettingsProvider } from '@/core/contexts/settingsContext'
import { getMode } from '@/core/utils/getMode'
import { SidebarPositionsEnum } from '@/core/data/Sidebar'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'
import LoginPage from '@/pages/auth/login'
import AppSidebar from '@/auth/nav/AppSidebar'
import ContentApp from '@/core/components/ContentApp'
import { useAtomValue } from 'jotai'
import { sidebarIsOpenAtom, sidebarSettingsAtom } from '@/core/atom/sidebar'
import { SidebarSettings } from '@/core/types/sidebar'
import { QueryClient } from '@tanstack/react-query'
import { SidebarInset, SidebarProvider } from '@shadcn/sidebar'
import { fakeAccount } from '@/core/data/auth'
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  loader: async () => {
    const mode = await getMode()
    return { mode }
  },
  component: App
})

function App() {
  const { mode } = Route.useLoaderData()

  if (import.meta.env.VITE_LOGIN_ACTIVATED.toString() === 'false') {
    const { accounts } = useMsal()
    accounts.push(fakeAccount)
  }

  return (
    <>
      <SettingsProvider mode={mode}>
        <ThemeProvider>
          {import.meta.env.VITE_LOGIN_ACTIVATED == true ? (
            <>
              <AuthenticatedTemplate>
                <AppSidebarProvider />
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <LoginPage />
              </UnauthenticatedTemplate>
            </>
          ) : (
            <AppSidebarProvider />
          )}
        </ThemeProvider>
      </SettingsProvider>
    </>
  )
}

function AppSidebarProvider() {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  const isOpen = useAtomValue<boolean>(sidebarIsOpenAtom)
  return (
    <SidebarProvider defaultOpen={isOpen} className='overflow-hidden'>
      {sidebarSettings.position === SidebarPositionsEnum.Left && <AppSidebar />}
      <SidebarInset className='overflow-hidden'>
        <ContentApp />
      </SidebarInset>
      {sidebarSettings.position === SidebarPositionsEnum.Right && <AppSidebar />}
    </SidebarProvider>
  )
}
