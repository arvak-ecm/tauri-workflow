import { createRootRouteWithContext } from '@tanstack/react-router'
import '@/styles/global.css'

import { ThemeProvider } from '@/core/providers/ThemesProvider'
import { SettingsProvider } from '@/core/contexts/settingsContext'
import { getMode } from '@/core/utils/getMode'
import { SidebarPositionsEnum } from '@/data/Sidebar'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import LoginPage from '@/pages/auth/login'
import AppSidebar from '@/auth/nav/AppSidebar'
import ContentApp from '@/auth/nav/ContentApp'
import { useAtomValue } from 'jotai'
import { sidebarIsOpenAtom, sidebarSettingsAtom } from '@/atom/globals'
import { SidebarSettings } from '@/types/sidebar'
import { QueryClient } from '@tanstack/react-query'
import { SidebarInset, SidebarProvider } from '@shadcn/sidebar'
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
