import { cn } from '@/lib/utils'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'

interface Props {
  className?: string
  iconName: string
}

export default function LucideIcon({ iconName, className }: Props) {
  return <DynamicIcon name={iconName as IconName} className={cn('text-muted size-6', className)} />
}
