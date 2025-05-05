import { getPageInfo } from '@/app/renegociated/menu-app'
import RolesPage from '@/app/renegociated/pages/admin/roles/RolesPage'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/renegociated/admin/roles')({
  loader: async () => {
    return { pageInfo: getPageInfo('admin-roles') }
  },
  component: RolesPage
})
