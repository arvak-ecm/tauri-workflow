import { isFilterTableAtom, tableExportAtom } from '@/core/atom/table'
import { Button } from '@shadcn/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@shadcn/dropdown-menu'
import { cn } from '@/lib/utils'
import { useSetAtom } from 'jotai'
import { EllipsisVertical, FileSpreadsheet, Filter } from 'lucide-react'

function ItemExport() {
  const isExport = useSetAtom(tableExportAtom)
  return (
    <DropdownMenuItem className='text-xs' onClick={() => isExport(true)}>
      <FileSpreadsheet /> Exportar
    </DropdownMenuItem>
  )
}

function ItemFilter() {
  const isFilter = useSetAtom(isFilterTableAtom)
  return (
    <DropdownMenuItem className='text-xs' onClick={() => isFilter(prevState => !prevState)}>
      <Filter /> Filtros
    </DropdownMenuItem>
  )
}

function TableOptions({ className }: { className?: string }) {
  return (
    <div className={(cn(''), className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='xs' variant='ghost'>
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-1 w-40 text-xs'>
          <ItemFilter />
          <ItemExport />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default TableOptions
