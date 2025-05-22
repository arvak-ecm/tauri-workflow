import LucideIcon from '@/components/customizer/LucideIcon'
import { Button } from '@shadcn/button'
import { IconName } from '@/core/types/avatar.type'
import { cn } from '@/lib/utils'
import { atom, useAtom, useAtomValue } from 'jotai'
import { tiptapEditorAtom } from '@/core/atom/tiptap.store'
import { Editor } from '@tiptap/react'

const isActiveAtom = atom(false)

type Props = {
  icon: IconName
  handleClick: () => void
  tooltip?: string
  className?: string
  activeCheck?: (editor: Editor) => boolean
}

const ButtonToolbar: React.FC<Props> = ({ icon, handleClick, tooltip, className, activeCheck }) => {
  const editor = useAtomValue(tiptapEditorAtom)
  const [isActive, setIsActive] = useAtom(isActiveAtom)

  /*useEffect(() => {
    if (!editor || !activeCheck) return
    const handler = () => {
      
      const result = activeCheck(editor)
      setIsActive(result)
    }
    handler() // ejecutar al montar
    editor.on('transaction', handler)
    return () => {
      editor.off('transaction', handler)
    }
  }, [editor, activeCheck])*/

  return (
    <Button
      data-active={isActive}
      variant='ghost'
      size='sm'
      onClick={handleClick}
      tooltip={tooltip}
      className={cn(className)}
    >
      <LucideIcon iconName={icon} className='h-4 w-4' />
    </Button>
  )
}

ButtonToolbar.displayName = 'ButtonToolbar'
export default ButtonToolbar
