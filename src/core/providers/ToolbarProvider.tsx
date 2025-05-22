import { Editor } from '@tiptap/react'
import { createContext } from 'react'

interface ToolbarProviderProps {
  editor: Editor | null
  children: React.ReactNode
}

export interface ToolbarContextProps {
  editor: Editor | null
}

export const ToolbarContext = createContext<ToolbarContextProps | null>(null)

export const ToolbarProvider = ({ editor, children }: ToolbarProviderProps) => {
  return <ToolbarContext.Provider value={{ editor }}>{children}</ToolbarContext.Provider>
}
