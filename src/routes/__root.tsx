import { createRootRoute } from '@tanstack/react-router'
import '@/styles/global.css'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
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

export const Route = createRootRoute({
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
          <AuthenticatedTemplate>
            <AppSidebarProvider />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <LoginPage />
          </UnauthenticatedTemplate>
        </ThemeProvider>
      </SettingsProvider>
    </>
  )
}

function AppSidebarProvider() {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  const isOpen = useAtomValue<boolean>(sidebarIsOpenAtom)
  return (
    <SidebarProvider defaultOpen={isOpen}>
      {sidebarSettings.position === SidebarPositionsEnum.Left && <AppSidebar />}
      <SidebarInset>
        <ContentApp />
      </SidebarInset>
      {sidebarSettings.position === SidebarPositionsEnum.Right && <AppSidebar />}
    </SidebarProvider>
  )
}
