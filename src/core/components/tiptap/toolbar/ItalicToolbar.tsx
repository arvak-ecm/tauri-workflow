import LucideIcon from '@/components/customizer/LucideIcon'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useToolbar } from '@/core/hooks/useToolbar'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const ItalicToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, tooltip, ...props }, ref) => {
    const { editor } = useToolbar()

    return (
      <Button
        variant='ghost'
        tooltip={tooltip}
        size='xs'
        className={cn(editor?.isActive('italic') && 'bg-accent', className)}
        onClick={e => {
          editor?.chain().focus().toggleItalic().run()
          onClick?.(e)
        }}
        disabled={!editor?.can().chain().focus().toggleItalic().run()}
        ref={ref}
        {...props}
      >
        {children || <LucideIcon iconName='Italic' />}
      </Button>
    )
  }
)

ItalicToolbar.displayName = 'ItalicToolbar'
export { ItalicToolbar }
