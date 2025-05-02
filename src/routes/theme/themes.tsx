import { createFileRoute } from '@tanstack/react-router'
import ThemesPage from '@/core/pages/theme/themes'
export const Route = createFileRoute('/theme/themes')({
  component: ThemesPage
})
