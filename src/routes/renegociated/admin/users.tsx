import { getPageInfo } from '@/app/renegociated/menu-app'
import { createFileRoute } from '@tanstack/react-router'
import UsersPage from '@/app/renegociated/pages/admin/users/UsersPage'

export const Route = createFileRoute('/renegociated/admin/users')({
  loader: async () => {
    return { pageInfo: getPageInfo('admin-users') }
  },
  component: UsersPage
})
