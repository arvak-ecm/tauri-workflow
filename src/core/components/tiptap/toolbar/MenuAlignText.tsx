import LucideIcon from '@/components/customizer/LucideIcon'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useToolbar } from '@/core/hooks/useToolbar'
import { IconName } from '@/core/types/avatar.type'

const alignmentOptions = [
  { text: 'Left', value: 'left', icon: 'AlignLeft' },
  { text: 'Center', value: 'center', icon: 'AlignCenter' },
  { text: 'Right', value: 'right', icon: 'AlignRight' },
  { text: 'Justify', value: 'justify', icon: 'AlignJustify' }
]

const findIndex = (value: string) => {
  return alignmentOptions.findIndex(option => option.value === value)
}

const AlignmentTooolbar: React.FC = () => {
  const { editor } = useToolbar()

  const handleAlign = (value: string) => {
    editor?.chain().focus().setTextAlign(value).run()
  }

  const isDisabled = (editor?.isActive('image') || editor?.isActive('video') || !editor) ?? false

  const currentTextAlign = () => {
    if (editor?.isActive({ textAlign: 'center' })) return 'center'
    if (editor?.isActive({ textAlign: 'right' })) return 'right'
    if (editor?.isActive({ textAlign: 'justify' })) return 'justify'
    return 'left'
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isDisabled} asChild>
        <Button variant='ghost' size='sm' tooltip='Text Alignment'>
          <LucideIcon iconName={alignmentOptions[findIndex(currentTextAlign())].icon as IconName} />
          <LucideIcon iconName='ChevronDown' className='ml-2' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        loop
        onCloseAutoFocus={e => {
          e.preventDefault()
        }}
      >
        <DropdownMenuGroup className='w-40'>
          {alignmentOptions.map(option => (
            <DropdownMenuItem key={option.value} onSelect={() => handleAlign(option.value)}>
              <LucideIcon iconName={option.icon as IconName} />
              {option.text}
              {option.value === currentTextAlign() && <LucideIcon iconName='Check' className='ml-auto' />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

AlignmentTooolbar.displayName = 'AlignmentTooolbar'
export { AlignmentTooolbar }
