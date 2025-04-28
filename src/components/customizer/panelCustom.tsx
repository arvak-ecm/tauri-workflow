import { cn } from '@/lib/utils'
import { StyleDefault } from '@/styles/custom.style'
import { Label } from '../ui/label'

interface PanelCustomProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function PanelCustom({ children, title, className }: PanelCustomProps) {
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

export default PanelCustom
