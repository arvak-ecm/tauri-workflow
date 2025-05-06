import { getPageInfo } from '@/app/renegociated/menu-app'
import HomePage from '@/app/renegociated/pages/home/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/renegociated/home')({
  loader: async () => {
    return { pageInfo: getPageInfo('home') }
  },
  component: HomePage
})
