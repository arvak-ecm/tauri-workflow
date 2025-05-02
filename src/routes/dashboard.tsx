import { PageInfo } from '@/core/types/reactRouter'
import { createFileRoute } from '@tanstack/react-router'
import { LayoutDashboard } from 'lucide-react'

const pageInfo: PageInfo = {
  title: 'Dashboard',
  description: 'Dashboard',
  icon: LayoutDashboard
}

export const Route = createFileRoute('/dashboard')({
  loader: async () => {
    return { pageInfo }
  },
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}
