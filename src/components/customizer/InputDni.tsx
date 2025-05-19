import LucideIcon from '@/components/customizer/LucideIcon'
import { Button } from '@shadcn/button'
import { Input } from '@shadcn/input'
import { formatDNI, validatedDni } from '@/functions/dni'
import { cn } from '@/lib/utils'
import { atom, useAtom } from 'jotai'
import { ChangeEvent, KeyboardEvent, memo, useEffect } from 'react'
import ClearButtonInput from './ClearButtonInput'

interface PropsInput {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

interface PropsDni {
  value?: string
}

const DNI_LENGTH = import.meta.env.VITE_DNI_CHL_LENGTH

const DniInput: React.FC<PropsInput> = ({ value, onChange, onKeyPress }) => (
  <Input
    value={value}
    className='rounded-r-none'
    placeholder='Ej: 11111111-1'
    onChange={onChange}
    max={DNI_LENGTH}
    onKeyDown={onKeyPress}
  />
)

const inputValue = atom({ dni: '', isValid: false })
const InputDni: React.FC<PropsDni> = ({ value = '' }) => {
  console.log('InputDni')
  const [{ dni, isValid }, setDniState] = useAtom(inputValue)

  useEffect(() => {
    setDniState({ dni: value, isValid: false })
  }, [value])

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && isValid) {
      console.log('Enter pressed')
    }
  }

  const handleClearInput = () => {
    setDniState({ dni: '', isValid: false })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const dniFormatted = formatDNI(value)
    if (dniFormatted.length > DNI_LENGTH) return
    const isValid = dniFormatted.length > 0 && validatedDni(dniFormatted)
    setDniState({ dni: dniFormatted, isValid })
  }

  return (
    <div className='flex w-60 flex-row'>
      <div className='relative flex w-full flex-col'>
        <DniInput value={dni} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <ClearButtonInput value={dni} onClick={handleClearInput} />
        <span className={cn('text-destructive px-2 py-1 opacity-0', !isValid && dni !== '' && 'opacity-100')}>
          Error Dni
        </span>
      </div>
      <Button disabled={!isValid || dni === ''} className='rounded-l-none' variant='default' tooltip='Search/Enter'>
        <LucideIcon iconName='Search' />
      </Button>
    </div>
  )
}

InputDni.displayName = 'InputDni'
export default memo(InputDni)
