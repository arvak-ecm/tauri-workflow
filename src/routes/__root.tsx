import { createRootRouteWithContext, Outlet, useNavigate, useRouterState } from '@tanstack/react-router'
import '@/styles/global.css'

import { ThemeProvider } from '@/core/providers/ThemesProvider'
import { SettingsProvider } from '@/core/contexts/settingsContext'
import { getMode } from '@/core/utils/getMode'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'
import LoginPage from '@/core/pages/auth/login.page'
import { QueryClient } from '@tanstack/react-query'
import { fakeAccount } from '@/core/data/auth'
import AppSidebarProvider from '@/core/components/sidebar/AppSidebarProvider'

import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react'

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
const authType = import.meta.env.VITE_AUTH_TYPE as 'MSAL' | 'CLERK'

function App() {
  const { mode } = Route.useLoaderData()

  if (!authActivated) {
    switch (authType) {
      case 'MSAL':
        const { accounts } = useMsal()
        accounts.push(fakeAccount)
        break
      case 'CLERK':
        break
    }
  }

  return (
    <>
      <SettingsProvider mode={mode}>
        <ThemeProvider>
          {authActivated && authType === 'CLERK' && <AuthClerk />}
          {authActivated && authType === 'MSAL' && <AuthMsal />}
          {!authActivated && <AppSidebarProvider />}
        </ThemeProvider>
      </SettingsProvider>
    </>
  )
}

const routesAuth = ['/auth/clerk/sign-up', '/auth/clerk/sign-in']

function AuthClerk() {
  const pathname = useRouterState({ select: s => s.location.pathname })
  const navigate = useNavigate()
  const { isSignedIn } = useAuth()

  if (!isSignedIn && !routesAuth.includes(pathname)) {
    navigate({ to: '/auth/clerk/sign-in' })
  }

  return (
    <>
      <SignedOut>
        <Outlet />
      </SignedOut>
      <SignedIn>
        <AppSidebarProvider />
      </SignedIn>
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
