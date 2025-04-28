import SidebarPage from '@/pages/settings/sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/sidebar')({
  component: SidebarPage
})
