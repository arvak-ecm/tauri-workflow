import SidebarPage from '@/core/pages/theme/sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/theme/sidebar')({
  component: SidebarPage
})
