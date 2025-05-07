import { cn } from '@/lib/utils'
import { StyleDefault } from '@/styles/custom.style'
import { Label } from '@shadcn/label'

interface Props {
  children: React.ReactNode
  title?: string
  className?: string
}

const PanelCustom: React.FC<Props> = ({ children, title, className }) => {
  return (
    <section
      className={cn(
        'border-style-app text-smcn(Style.panel) flex flex-col gap-2 rounded-sm border p-6 text-sm',
        className
      )}
    >
      {title && <Label className={cn(StyleDefault.label, 'text-primary font-semibold')}>{title}</Label>}
      {children}
    </section>
  )
}

PanelCustom.displayName = 'PanelCustom'
export default PanelCustom
