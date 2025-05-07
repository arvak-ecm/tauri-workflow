import { createFileRoute } from '@tanstack/react-router'
import { getPageInfo } from '@/app/garra/menu-app'
import UsersPage from '@/app/garra/pages/admin/users/UsersPage'
import { getUsersQuery } from '@/app/garra/apis/users'

export const Route = createFileRoute('/garra/admin/users')({
  loader: async ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(getUsersQuery())
    return { pageInfo: getPageInfo('admin-users') }
  },
  component: UsersPage
})
