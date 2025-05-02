import { cn } from '@/lib/utils'

type LoadingProps = {
  className?: string
}

function Loading({ className }: LoadingProps) {
  return <div className={cn(className)}>Loading...</div>
}

export default Loading
