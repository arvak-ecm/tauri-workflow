import LucideIcon from '@/components/customizer/LucideIcon'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useToolbar } from '@/core/hooks/useToolbar'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const BulletListToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, tooltip, ...props }, ref) => {
    const { editor } = useToolbar()

    return (
      <Button
        variant='ghost'
        size='xs'
        tooltip={tooltip}
        className={cn(editor?.isActive('bulletList') && 'bg-accent', className)}
        onClick={e => {
          editor?.chain().focus().toggleBulletList().run()
          onClick?.(e)
        }}
        disabled={!editor?.can().chain().focus().toggleBulletList().run()}
        ref={ref}
        {...props}
      >
        {children || <LucideIcon iconName='List' />}
      </Button>
    )
  }
)

BulletListToolbar.displayName = 'BulletListToolbar'
export { BulletListToolbar }
