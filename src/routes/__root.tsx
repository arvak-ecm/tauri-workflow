import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '@/styles/global.css'
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton
} from '@/components/ui/sidebar'
import { ThemeProvider, useTheme } from '@/providers/ThemesProvider'
import { SettingsProvider } from '@/contexts/settingsContext'
import { getMode } from '@/utils/getMode'
import { Settings } from 'lucide-react'
import NavApp from '@/components/NavApp'
import { SidebarPositionsEnum } from '@/data/Sidebar'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'
import { loginRequest } from '@/auth/authConfig'
import { Button } from '@/components/ui/button'
import { NavUser } from '@/auth/NavUser'

export const Route = createRootRoute({
  loader: async () => {
    const mode = await getMode()

    return { mode }
  },
  component: App
})

function App() {
  const { instance } = useMsal()
  const { mode } = Route.useLoaderData()

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch(e => {
      console.log(e)
    })
  }

  return (
    <>
      <SettingsProvider mode={mode}>
        <ThemeProvider>
          <AuthenticatedTemplate>
            <SidebarProviderRoute />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div className='flex h-screen flex-col items-center justify-center'>
              <div>
                <h1>App Title here </h1>
                <Button variant='default' onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </div>
          </UnauthenticatedTemplate>
        </ThemeProvider>
      </SettingsProvider>
    </>
  )
}

function SidebarProviderRoute() {
  return <AppSidebarProvider />
}

function AppSidebarProvider() {
  const { getSidebarSettings } = useTheme()
  return (
    <SidebarProvider>
      {getSidebarSettings()?.position === SidebarPositionsEnum.Left && (
        <AppSidebar
          variant={getSidebarSettings()?.variant}
          side={getSidebarSettings()?.position}
          collapsible={getSidebarSettings()?.collapsible}
        />
      )}
      <SidebarInset>
        <>
          <NavApp />
          <Outlet />
        </>
      </SidebarInset>
      {getSidebarSettings()?.position === SidebarPositionsEnum.Right && (
        <AppSidebar variant={getSidebarSettings()?.variant} side={getSidebarSettings()?.position} />
      )}
    </SidebarProvider>
  )
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { getSidebarSettings } = useTheme()
  return (
    <Sidebar {...props} collapsible={getSidebarSettings()?.collapsible}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroupLabel>Aplicación</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to='/theme'>
                  <Settings /> Settings
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: 'Cardo', email: 'cardo@gmail.com', avatar: 'https://i.pravatar.cc/150?img=1' }} />
      </SidebarFooter>
    </Sidebar>
  )
}
