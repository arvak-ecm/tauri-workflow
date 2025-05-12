import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth-success')({
  component: AuthSuccess
})

function AuthSuccess() {
  return <h1>Auth Success</h1>
}
