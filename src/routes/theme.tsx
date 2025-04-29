import ThemePage from '@/pages/theme'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/theme')({
  component: ThemePage
})
