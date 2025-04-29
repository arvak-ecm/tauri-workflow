import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/logout')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div>
      <h1>Logout</h1>
      <Button variant='default'>Home</Button>
    </div>
  )
}
