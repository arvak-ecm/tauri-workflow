import AccountPage from '@/core/pages/auth/account.page'
import { PageInfo } from '@/core/types/reactRouter.type'
import { createFileRoute } from '@tanstack/react-router'

const pageInfo: PageInfo = {
  title: 'Account',
  description: 'Manage your account info.',
  icon: 'user-circle'
}

export const Route = createFileRoute('/auth/account')({
  loader: () => {
    return { pageInfo }
  },
  component: AccountPage
})
