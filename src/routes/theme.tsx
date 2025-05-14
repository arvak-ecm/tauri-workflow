import ThemePage from '@/core/pages/theme'
import { PageInfo } from '@/core/types/reactRouter.type'
import { createFileRoute } from '@tanstack/react-router'

const pageInfo: PageInfo = {
  title: 'Theme',
  description: 'Customize your theme',
  icon: 'palette'
}

export const Route = createFileRoute('/theme')({
  loader: async () => {
    return { pageInfo }
  },
  component: ThemePage
})
