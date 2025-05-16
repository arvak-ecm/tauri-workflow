//import { DynamicIcon, IconName } from 'lucide-react/dynamic'
import { IconMap, IconName as iconNameLucide } from '@/core/components/icons-map'
interface Props {
  className?: string
  iconName: string
}

/*const LucideIcon: React.FC<Props> = ({ iconName, className }) => (
  <DynamicIcon name={iconName as IconName} className={cn('text-muted size-6', className)} />
)*/

export function LucideIcon({ iconName, ...props }: { iconName: iconNameLucide } & React.ComponentProps<'svg'>) {
  const Icon = IconMap[iconName]
  return Icon ? <Icon {...props} /> : null
}

LucideIcon.displayName = 'LucideIcon'
export default LucideIcon
