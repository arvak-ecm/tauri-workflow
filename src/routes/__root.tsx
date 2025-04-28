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

export const Route = createRootRoute({
  loader: async () => {
    const mode = await getMode()

    return { mode }
  },
  component: SidebarProviderRoute
})

function SidebarProviderRoute() {
  const { mode } = Route.useLoaderData()
  return (
    <SettingsProvider mode={mode}>
      <ThemeProvider>
        <AppSidebarProvider />
      </ThemeProvider>
    </SettingsProvider>
  )
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
                <Link to='/settings'>
                  <Settings /> Settings
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
