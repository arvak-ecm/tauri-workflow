import TypographyPage from '@/pages/settings/typography'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/typography')({
  component: TypographyPage
})
