import { createFileRoute } from '@tanstack/react-router'
import Sample from '@/core/md/spectra.mdx'
import MarkdownWrapper from '@/components/customizer/MDWrapper'

const pageInfo = {
  title: 'Index',
  description: 'Index page'
}

export const Route = createFileRoute('/')({
  loader: async () => pageInfo,
  component: Page
})

function Page() {
  return (
    <MarkdownWrapper>
      <Sample />
    </MarkdownWrapper>
  )
}
