import SignInPage from '@/core/auth/clerk/signin.page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/clerk/sign-in')({
  component: SignInPage
})
