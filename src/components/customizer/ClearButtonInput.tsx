import { cn } from '@/lib/utils'
import LucideIcon from './LucideIcon'

interface Props {
  dni: string
  onClick: () => void
}

const ClearButtonInput: React.FC<Props> = ({ dni, onClick }) => (
  <button
    type='button'
    className={cn('absolute top-[10px] right-1 opacity-0', dni !== '' && 'opacity-100')}
    title='clear-dni'
    onClick={onClick}
  >
    <LucideIcon iconName='x' className='text-destructive size-4' />
  </button>
)

ClearButtonInput.displayName = 'ClearButtonInput'
export default ClearButtonInput
