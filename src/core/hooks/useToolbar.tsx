import { useContext } from 'react'
import { ToolbarContext } from '@/core/providers/ToolbarProvider'

export const useToolbar = () => {
  const context = useContext(ToolbarContext)

  if (!context) {
    throw new Error('useToolbar must be used within a ToolbarProvider')
  }

  return context
}
