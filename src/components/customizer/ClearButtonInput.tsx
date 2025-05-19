import { cn } from '@/lib/utils'
import LucideIcon from './LucideIcon'

interface Props {
  value: string
  onClick: () => void
}

const ClearButtonInput: React.FC<Props> = ({ value, onClick }) => (
  <button
    type='button'
    className={cn('absolute top-[10px] right-1 opacity-0', value !== '' && 'opacity-100')}
    title='clear-value'
    onClick={onClick}
  >
    <LucideIcon iconName='X' className='text-destructive size-4' />
  </button>
)

ClearButtonInput.displayName = 'ClearButtonInput'
export default ClearButtonInput
