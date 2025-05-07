import { getPageInfo } from '@/app/garra/menu-app'
import RolesPage from '@/app/garra/pages/admin/roles/RolesPage'
import { createFileRoute } from '@tanstack/react-router'
import { getRolesQuery } from '@/app/garra/apis/roles'

export const Route = createFileRoute('/garra/admin/roles')({
  loader: async ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(getRolesQuery())
    return { pageInfo: getPageInfo('admin-roles') }
  },
  component: RolesPage
})
