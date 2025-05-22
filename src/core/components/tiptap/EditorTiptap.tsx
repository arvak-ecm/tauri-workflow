import { EditorContent, useEditor } from '@tiptap/react'
import { extensions } from './TiptapExtensions'
import { useSetAtom } from 'jotai'
import { tiptapEditorAtom } from '@/core/atom/tiptap.store'
import { useEffect } from 'react'
import { ToolbarProvider } from '@/core/providers/ToolbarProvider'
import { UndoToolbar } from './toolbar/UndoToolbar'
import { RedoToolbar } from './toolbar/RedoToolbar'
import { BoldToolbar } from './toolbar/BoldToolbar'
import { Separator } from '@/components/ui/separator'
import { UnderlineToolbar } from './toolbar/UnderlineToolbar'
import { ItalicToolbar } from './toolbar/ItalicToolbar'
import { BulletListToolbar } from './toolbar/BulletListToolbar'
import { OrderedListToolbar } from './toolbar/OrderedListToolbar'
import { AlignmentTooolbar } from './toolbar/MenuAlignText'
import { BorderTrail } from '../motion/BorderTrail'
import { ImagePlaceholderToolbar } from './toolbar/ImagePlaceholderToolbar'
import { FileToolbar } from './toolbar/FileToolbar'

const content =
  'Laborum ullamco laboris cupidatat proident irure aliquip. Cupidatat dolor velit Lorem incididunt velit sunt exercitation velit irure deserunt elit. Proident culpa amet mollit cillum aute. Officia laborum et Lorem tempor enim anim. Eu qui voluptate anim pariatur dolor esse anim.'

const EditorTiptap = () => {
  const setEditor = useSetAtom(tiptapEditorAtom)
  const editor = useEditor({
    extensions,
    content,
    immediatelyRender: false
  })
  useEffect(() => {
    setEditor(editor)
  }, [editor])

  if (!editor) {
    return null
  }
  return (
    <div className='relative overflow-hidden rounded-sm border pb-3'>
      <BorderTrail />
      <div className='relative h-full w-max max-w-[20rem] overflow-auto rounded-sm border pr-3 md:max-w-full'>
        <ToolbarProvider editor={editor}>
          <div className='flex h-8 w-full items-center gap-1 px-2 py-2 [&>button]:shrink-0'>
            <FileToolbar />
            <Separator orientation='vertical' className='h-7' />
            <BoldToolbar />
            <ItalicToolbar />
            <UnderlineToolbar />
            <Separator orientation='vertical' className='h-7' />
            <UndoToolbar />
            <RedoToolbar />
            <Separator orientation='vertical' className='h-7' />
            <BulletListToolbar />
            <OrderedListToolbar />
            <AlignmentTooolbar />
            <ImagePlaceholderToolbar />
          </div>
        </ToolbarProvider>
      </div>
      <div
        onClick={() => {
          editor?.chain().focus().run()
        }}
        className='mt-2 min-h-[18rem] cursor-text'
      >
        <EditorContent className='' editor={editor} />
      </div>
    </div>
  )
}

EditorTiptap.displayName = 'EditorTiptap'
export default EditorTiptap
