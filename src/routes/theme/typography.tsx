import TypographyPage from '@/core/pages/theme/typography'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/theme/typography')({
  component: TypographyPage
})
