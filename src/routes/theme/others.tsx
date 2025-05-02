import { createFileRoute } from '@tanstack/react-router'
import OthersPage from '@/core/pages/theme/others'

export const Route = createFileRoute('/theme/others')({
  component: OthersPage
})
