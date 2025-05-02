import type { PageInfo } from '@/core/types/reactRouter'
import { createFileRoute } from '@tanstack/react-router'
import { ShieldUser } from 'lucide-react'

const pageInfo: PageInfo = {
  title: 'Roles',
  description: 'Manage your roles',
  icon: ShieldUser
}

export const Route = createFileRoute('/vyc/admin/roles')({
  loader: async () => {
    return { pageInfo }
  },
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/admin/roles"!</div>
}
