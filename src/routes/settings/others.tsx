import { createFileRoute } from '@tanstack/react-router'
import OthersPage from '@/pages/settings/others'

export const Route = createFileRoute('/settings/others')({
  component: OthersPage
})
