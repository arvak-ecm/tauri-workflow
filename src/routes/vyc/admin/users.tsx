import type { PageInfo } from '@/core/types/reactRouter'
import { createFileRoute } from '@tanstack/react-router'
import { Users } from 'lucide-react'

const pageInfo: PageInfo = {
  title: 'Users',
  description: 'Manage your users',
  icon: Users
}

export const Route = createFileRoute('/vyc/admin/users')({
  loader: async () => {
    return { pageInfo }
  },
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/admin/users"!</div>
}
