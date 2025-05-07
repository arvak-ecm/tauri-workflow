import { createFileRoute } from '@tanstack/react-router'
import DashboardPage from '@/app/garra/pages/dashboard/Dashboard'
import { getPageInfo } from '@/app/garra/menu-app'

export const Route = createFileRoute('/garra/dashboard')({
  loader: () => {
    return { pageInfo: getPageInfo('dashboard') }
  },
  component: DashboardPage
})
