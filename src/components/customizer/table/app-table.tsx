import { useAtomValue } from 'jotai'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { isFilterTableAtom } from '@/atom/store-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import HeaderTable from './table-header'
import { cn } from '@/lib/utils'
import Paginator from './table-paginator'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import Loading from '@/components/loading'

interface TableProps<T> {
  columns: any[]
  queryOptions: UseQueryOptions<T[]>
  children?: React.ReactNode
}

function AppTable<T>({ columns, queryOptions, children }: TableProps<T>) {
  const { data, isLoading, isError } = useQuery(queryOptions)
  const isFilter = useAtomValue(isFilterTableAtom)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  const table = useReactTable<T>({
    data: data as T[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  })

  useEffect(() => {
    if (!isFilter) {
      table.setColumnFilters([])
    }
  }, [isFilter])

  if (isError) return <div>Error al cargar los datos</div>
  if (isLoading) return <Loading />

  return (
    <>
      {children}
      <Table className='relative z-1 w-full text-xs'>
        <HeaderTable table={table} />
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className='group'>
              {row.getVisibleCells().map(cell => (
                <TableCell id={cell.id} key={cell.id} className={cn(cell.id.includes('action') ? 'p-0' : '')}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {table.getPageCount() > 1 && <Paginator table={table} />}
    </>
  )
}
export default AppTable
