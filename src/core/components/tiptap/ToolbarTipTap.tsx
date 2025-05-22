import { tiptapEditorAtom } from '@/core/atom/tiptap.store'
import { useAtomValue } from 'jotai'
import { Separator } from '@shadcn/separator'
import MenuAlignText from './toolbar/MenuAlignText'
import ButtonToolbar from './toolbar/ButtonToolbar'

const ToolbarTipTap = () => {
  const editor = useAtomValue(tiptapEditorAtom)
  return (
    <div className='bg-card flex h-10 w-full flex-row items-center gap-0.5 rounded-sm border p-1'>
      <ButtonToolbar icon='Undo' handleClick={() => editor?.commands.undo()} tooltip='Undo' />
      <ButtonToolbar icon='Redo' handleClick={() => editor?.commands.redo()} tooltip='Redo' />
      <Separator orientation='vertical' className='mx-1' />
      <ButtonToolbar
        icon='Bold'
        handleClick={() => editor?.chain().focus().toggleBold().run()}
        tooltip='Bold'
        activeCheck={editor => editor.isActive('bold')}
        className='data-[active="true"]:!bg-accent'
      />
      <ButtonToolbar
        icon='Italic'
        handleClick={() => editor?.chain().focus().toggleItalic().run()}
        tooltip='Italic'
        activeCheck={editor => editor.isActive('italic')}
        className='data-[active="true"]:!bg-accent'
      />
      <ButtonToolbar
        icon='Underline'
        handleClick={() => editor?.chain().focus().toggleUnderline().run()}
        tooltip='Underline'
        activeCheck={editor => editor.isActive('underline')}
        className='data-[active="true"]:!bg-accent'
      />
      <ButtonToolbar
        icon='Strikethrough'
        handleClick={() => editor?.chain().focus().toggleStrike().run()}
        tooltip='Strike'
        activeCheck={editor => editor.isActive('strike')}
        className='data-[active="true"]:!bg-accent'
      />
      <MenuAlignText />
    </div>
  )
}

ToolbarTipTap.displayName = 'ToolbarTipTap'
export default ToolbarTipTap
