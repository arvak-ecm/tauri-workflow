import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vyc/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vyc/admin/home"!</div>
}
