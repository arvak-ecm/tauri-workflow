import { cn } from '@/lib/utils'
import { flexRender, Table } from '@tanstack/react-table'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import TableFilter from './table-filter'

interface HeaderProps<T> {
  table: Table<T>
}
function HeaderTable<T>({ table }: HeaderProps<T>) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map(headerGroup => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <TableHead
              key={header.id}
              colSpan={header.colSpan}
              style={{ width: `${header.getSize()}px !important` }}
              className={cn('relative p-1', header.column.getCanSort() ? 'cursor-pointer select-none' : '')}
              onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
            >
              <div style={{ width: `${header.getSize()}px` }} className='flex flex-row items-center gap-1'>
                <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                {header.column.getCanSort() && (
                  <span className='min-w-5'>
                    {{
                      asc: <ChevronUp size={16} />,
                      desc: <ChevronDown size={16} />
                    }[header.column.getIsSorted() as string] ?? null}
                  </span>
                )}
              </div>
              {header.column.getCanFilter() ? <TableFilter table={table} column={header.column} /> : null}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  )
}

export default HeaderTable
