import { createFileRoute } from '@tanstack/react-router'
import ThemesPage from '@/pages/settings/themes'
export const Route = createFileRoute('/settings/themes')({
  component: ThemesPage
})
