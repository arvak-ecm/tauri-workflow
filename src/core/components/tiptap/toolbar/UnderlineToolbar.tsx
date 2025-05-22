import LucideIcon from '@/components/customizer/LucideIcon'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useToolbar } from '@/core/hooks/useToolbar'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const UnderlineToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, tooltip, ...props }, ref) => {
    const { editor } = useToolbar()

    return (
      <Button
        variant='ghost'
        tooltip={tooltip}
        size='xs'
        className={cn(editor?.isActive('underline') && 'bg-accent', className)}
        onClick={e => {
          editor?.chain().focus().toggleUnderline().run()
          onClick?.(e)
        }}
        disabled={!editor?.can().chain().focus().toggleUnderline().run()}
        ref={ref}
        {...props}
      >
        {children || <LucideIcon iconName='Underline' />}
      </Button>
    )
  }
)

UnderlineToolbar.displayName = 'UnderlineToolbar'
export { UnderlineToolbar }
