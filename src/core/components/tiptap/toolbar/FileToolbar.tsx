import LucideIcon from '@/components/customizer/LucideIcon'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useToolbar } from '@/core/hooks/useToolbar'
import { readFileTipTap } from '@/functions/fs'
import { open } from '@tauri-apps/plugin-dialog'

const FileToolbar = () => {
  const { editor } = useToolbar()

  const handleOpenFile = async () => {
    const file = await open({
      directory: false,
      multiple: false,
      filters: [{ name: 'Titap', extensions: ['html', 'json'] }]
    })

    if (file) {
      const jsonFile = await readFileTipTap(file)
      editor?.commands.setContent(jsonFile)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='xs'>
          File
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        loop
        onCloseAutoFocus={e => {
          e.preventDefault()
        }}
      >
        <DropdownMenuGroup className='w-40'>
          <DropdownMenuItem onClick={handleOpenFile}>
            <LucideIcon iconName='FolderOpen' />
            Open
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log(JSON.stringify(editor?.getJSON()))}>
            <LucideIcon iconName='Save' />
            Save
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

FileToolbar.displayName = 'FileToolbar'
export { FileToolbar }
