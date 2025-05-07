import { cn } from '@/lib/utils'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'

interface Props {
  className?: string
  iconName: string
}

const LucideIcon: React.FC<Props> = ({ iconName, className }) => (
  <DynamicIcon name={iconName as IconName} className={cn('text-muted size-6', className)} />
)

LucideIcon.displayName = 'LucideIcon'
export default LucideIcon
