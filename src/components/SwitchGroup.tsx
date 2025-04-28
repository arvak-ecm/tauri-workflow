import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { StyleDefault } from '@/styles/custom.style'

export type SwitchOption = {
  id: string
  label: string
}

export type SwitchGroupProps = {
  activeItem?: string | null
  switches: SwitchOption[]
  onChange?: (selectedId: string | null) => void
}

export function SwitchGroup({ switches, onChange, activeItem }: SwitchGroupProps) {
  const [active, setActive] = useState<string>(activeItem || switches[0]?.id || '')

  const handleChange = (id: string) => {
    setActive(prev => {
      const newActive = prev === id ? prev : id
      onChange?.(newActive)
      return newActive
    })
  }

  return (
    <div className='flex flex-col gap-2'>
      {switches.map(sw => (
        <div className='flex items-center gap-2' key={sw.id}>
          <Switch
            className='cursor-pointer'
            checked={active === sw.id}
            onCheckedChange={() => handleChange(sw.id)}
            id={sw.id}
          />
          <label className={cn('cursor-pointer', StyleDefault.label)} htmlFor={sw.id}>
            {sw.label}
          </label>
        </div>
      ))}
    </div>
  )
}
