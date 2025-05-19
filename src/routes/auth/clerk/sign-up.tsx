import SignUpPage from '@/core/auth/clerk/signup.page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/clerk/sign-up')({
  component: SignUpPage
})
