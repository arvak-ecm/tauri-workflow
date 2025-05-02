import ThemePage from '@/core/pages/theme'
import { PageInfo } from '@/core/types/reactRouter'
import { createFileRoute } from '@tanstack/react-router'
import { Palette } from 'lucide-react'

const pageInfo: PageInfo = {
  title: 'Theme',
  description: 'Customize your theme',
  icon: Palette
}

export const Route = createFileRoute('/theme')({
  loader: async () => {
    return { pageInfo }
  },
  component: ThemePage
})
