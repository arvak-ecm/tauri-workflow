import LucideIcon from '@/components/customizer/LucideIcon'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useToolbar } from '@/core/hooks/useToolbar'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const UndoToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, tooltip, ...props }, ref) => {
    const { editor } = useToolbar()

    return (
      <Button
        tooltip={tooltip}
        variant='ghost'
        size='xs'
        className={cn(className)}
        onClick={e => {
          editor?.chain().focus().undo().run()
          onClick?.(e)
        }}
        disabled={!editor?.can().chain().focus().undo().run()}
        ref={ref}
        {...props}
      >
        {children || <LucideIcon iconName='Undo' />}
      </Button>
    )
  }
)

UndoToolbar.displayName = 'UndoToolbar'
export { UndoToolbar }
