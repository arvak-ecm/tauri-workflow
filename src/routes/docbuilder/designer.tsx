import DesignerPage from '@/app/docbuilder/pages/desingner/designer.page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docbuilder/designer')({
  component: DesignerPage
})
