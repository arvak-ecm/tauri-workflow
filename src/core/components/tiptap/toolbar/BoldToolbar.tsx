import LucideIcon from '@/components/customizer/LucideIcon'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useToolbar } from '@/core/hooks/useToolbar'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const BoldToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, tooltip, ...props }, ref) => {
    const { editor } = useToolbar()

    return (
      <Button
        variant='ghost'
        size='xs'
        tooltip={tooltip}
        className={cn(editor?.isActive('bold') && 'bg-accent', className)}
        onClick={e => {
          editor?.chain().focus().toggleBold().run()
          onClick?.(e)
        }}
        disabled={!editor?.can().chain().focus().toggleBold().run()}
        ref={ref}
        {...props}
      >
        {children || <LucideIcon iconName='Bold' />}
      </Button>
    )
  }
)

BoldToolbar.displayName = 'BoldToolbar'
export { BoldToolbar }
