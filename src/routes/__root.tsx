import { createRootRoute } from '@tanstack/react-router'
import '@/styles/global.css'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { ThemeProvider, useTheme } from '@/providers/ThemesProvider'
import { SettingsProvider } from '@/contexts/settingsContext'
import { getMode } from '@/utils/getMode'
import { SidebarPositionsEnum } from '@/data/Sidebar'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import LoginPage from '@/pages/auth/login'
import AppSidebar from '@/auth/nav/AppSidebar'
import ContentApp from '@/components/ContentApp'

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
  const { getSidebarSettings } = useTheme()
  return (
    <SidebarProvider>
      {getSidebarSettings()?.position === SidebarPositionsEnum.Left && <AppSidebar />}
      <SidebarInset>
        <ContentApp />
      </SidebarInset>
      {getSidebarSettings()?.position === SidebarPositionsEnum.Right && <AppSidebar />}
    </SidebarProvider>
  )
}
