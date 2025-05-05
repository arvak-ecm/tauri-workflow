import { getPageInfo } from '@/app/renegociated/menu-app'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/renegociated/dashboard')({
  loader: async () => {
    return { pageInfo: getPageInfo('dashboard') }
  },
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}
