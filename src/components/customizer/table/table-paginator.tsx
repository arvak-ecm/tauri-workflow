import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { Table } from '@tanstack/react-table'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface PaginatorProps<T> {
  table: Table<T>
}

function Paginator<T>({ table }: PaginatorProps<T>) {
  const pages = Array.from({ length: table.getPageCount() }, (_, i) => i)
  const currentPage = table.getState().pagination.pageIndex
  return (
    <Pagination>
      <PaginationContent className='ml-auto'>
        <PaginationItem>
          <Button variant='ghost' disabled={!table.getCanPreviousPage()} onClick={() => table.firstPage()}>
            <ChevronFirst />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant='ghost' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
            <ChevronLeft />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Select value={currentPage.toString()} onValueChange={value => table.setPageIndex(Number(value))}>
            <SelectTrigger className='h-8 w-40'>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {pages.map(page => (
                  <SelectItem key={page} value={page.toString()}>
                    page {page + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </PaginationItem>

        <PaginationItem>
          <Button variant='ghost' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
            <ChevronRight />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant='ghost' disabled={!table.getCanNextPage()} onClick={() => table.lastPage()}>
            <ChevronLast />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default Paginator
