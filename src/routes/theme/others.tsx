import { createFileRoute } from '@tanstack/react-router'
import OthersPage from '@/pages/theme/others'

export const Route = createFileRoute('/theme/others')({
  component: OthersPage
})
