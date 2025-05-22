import { createRootRouteWithContext } from '@tanstack/react-router'
import '@/styles/global.css'

import { ThemeProvider } from '@/core/providers/ThemesProvider'
import { SettingsProvider } from '@/core/contexts/settingsContext'
import { getMode } from '@/core/utils/getMode'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import LoginPage from '@/core/pages/auth/login.page'
import { QueryClient } from '@tanstack/react-query'
import AppSidebarProvider from '@/core/components/sidebar/AppSidebarProvider'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  loader: async () => {
    const mode = await getMode()
    return { mode }
  },
  component: App
})

const authActivated = import.meta.env.VITE_AUTH_ACTIVATED === 'true'

function App() {
  const { mode } = Route.useLoaderData()
  return (
    <>
      <SettingsProvider mode={mode}>
        <ThemeProvider>{authActivated ? <AuthMsal /> : <AppSidebarProvider />}</ThemeProvider>
      </SettingsProvider>
    </>
  )
}

function AuthMsal() {
  return (
    <>
      <AuthenticatedTemplate>
        <AppSidebarProvider />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  )
}
