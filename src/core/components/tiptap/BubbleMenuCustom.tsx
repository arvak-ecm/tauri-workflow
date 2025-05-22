import LucideIcon from '@/components/customizer/LucideIcon'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { BubbleMenu, Editor } from '@tiptap/react'

interface BubbleMenuProps {
  editor: Editor | null
}

const BubbleMenuCustom: React.FC<BubbleMenuProps> = ({ editor }) => {
  return (
    <BubbleMenu className='bubble-menu' tippyOptions={{ duration: 100 }} editor={editor}>
      <ToggleGroup
        type='multiple'
        variant='outline'
        className='bg-card'
        value={[
          ...(editor?.isActive('bold') ? ['bold'] : []),
          ...(editor?.isActive('italic') ? ['italic'] : []),
          ...(editor?.isActive('underline') ? ['underline'] : [])
        ]}
        onValueChange={value => console.log(value)}
      >
        <ToggleGroupItem
          value='bold'
          aria-label='Toggle bold'
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          <LucideIcon iconName='Bold' className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          value='italic'
          aria-label='Toggle italic'
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <LucideIcon iconName='Italic' className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          value='underline'
          aria-label='Toggle strikethrough'
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
        >
          <LucideIcon iconName='Underline' className='h-4 w-4' />
        </ToggleGroupItem>
      </ToggleGroup>
    </BubbleMenu>
  )
}

BubbleMenuCustom.displayName = 'BubbleMenuCustom'
export default BubbleMenuCustom
