import LucideIcon from '@/components/customizer/LucideIcon'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useToolbar } from '@/core/hooks/useToolbar'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const ImagePlaceholderToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, tooltip, ...props }, ref) => {
    const { editor } = useToolbar()

    return (
      <Button
        variant='ghost'
        size='xs'
        tooltip={tooltip}
        className={cn(editor?.isActive('image-placeholder') && 'bg-accent', className)}
        onClick={e => {
          editor?.chain().focus().insertImagePlaceholder().run()
          onClick?.(e)
        }}
        disabled={!editor?.can().chain().focus().insertImagePlaceholder().run()}
        ref={ref}
        {...props}
      >
        {children || <LucideIcon iconName='Image' />}
      </Button>
    )
  }
)

ImagePlaceholderToolbar.displayName = 'ImagePlaceholderToolbar'
export { ImagePlaceholderToolbar }
