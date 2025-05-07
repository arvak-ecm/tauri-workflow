// React Imports
import { useEffect, useState } from 'react'
import { Label } from '@shadcn/label'
import { Input } from '@shadcn/input'
import { Slider } from '@shadcn/slider'
import { StyleDefault } from '@/styles/custom.style'
import { cn } from '@/lib/utils'

type SliderWithInputProps = {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  label: string
  unit?: string
}

const SliderWithInput: React.FC<SliderWithInputProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  label,
  unit = 'px'
}) => {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  return (
    <div className='mb-3'>
      <div className='mb-1.5 flex items-center justify-between'>
        <Label
          htmlFor={`slider-${label.replace(/\s+/g, '-').toLowerCase()}`}
          className={cn(StyleDefault.label, 'text-primary font-semibold')}
        >
          {label}
        </Label>
        <div className='flex items-center gap-1'>
          <Input
            id={`input-${label.replace(/\s+/g, '-').toLowerCase()}`}
            type='number'
            value={localValue}
            onChange={e => {
              const newValue = Number(e.target.value)

              setLocalValue(newValue)
              onChange(newValue)
            }}
            min={min}
            max={max}
            step={step}
            className='h-6 w-18 px-2 text-xs'
          />
          <span className='text-muted-foreground text-xs'>{unit}</span>
        </div>
      </div>
      <Slider
        id={`slider-${label.replace(/\s+/g, '-').toLowerCase()}`}
        value={[localValue]}
        min={min}
        max={max}
        step={step}
        onValueChange={values => {
          setLocalValue(values[0])
          onChange(values[0])
        }}
        className='py-1'
      />
    </div>
  )
}

SliderWithInput.displayName = 'SliderWithInput'
export default SliderWithInput
