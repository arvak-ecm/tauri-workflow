import { getPageInfo } from '@/app/renegociated/menu-app'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/renegociated/home')({
  loader: async () => {
    return { pageInfo: getPageInfo('home') }
  },
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/vyc/admin/home"!</div>
}
