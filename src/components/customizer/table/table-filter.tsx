import { isFilterTableAtom } from '@/atom/store-table'
import { Input } from '@shadcn/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shadcn/select'
import { cn } from '@/lib/utils'
import { Column, Table } from '@tanstack/react-table'
import { useAtomValue } from 'jotai'
import { motion } from 'motion/react'
import { useMemo } from 'react'
const Style = {
  input: 'text-xs font-sans w-full h-7 md:text-xs',
  inputNumber: 'font-sans w-10 p-1 h-7 md:text-xs',
  select: 'font-sans text-xs w-full !h-7 md:text-xs'
}

function TableFilter({ column, table }: { column: Column<any, any>; table: Table<any> }) {
  const isFilter = useAtomValue(isFilterTableAtom)
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

  const { filterVariant } = column.columnDef.meta ?? {}

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = useMemo(
    () => (filterVariant === 'range' ? [] : Array.from(column.getFacetedUniqueValues().keys()).sort().slice(0, 5000)),
    [column.getFacetedUniqueValues(), filterVariant]
  )
  console.log('sortedUniqueValues', column.getFacetedUniqueValues().keys())
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isFilter ? 1 : 0, height: isFilter ? 'auto' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='overflow-hidden'
    >
      {typeof firstValue === 'number' ? (
        <div className={cn('invisible flex space-x-2', isFilter && 'visible')} onClick={e => e.stopPropagation()}>
          <Input
            type='number'
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={e => column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])}
            placeholder={`Min`}
            className={Style.inputNumber}
          />
          <Input
            type='number'
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={e => column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])}
            placeholder={`Max`}
            className={Style.inputNumber}
          />
        </div>
      ) : filterVariant === 'select' ? (
        <Select onValueChange={value => column.setFilterValue(value)} value={columnFilterValue?.toString()}>
          <SelectTrigger className={cn('w-full', Style.select)} onClick={e => e.stopPropagation()}>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent>
            {sortedUniqueValues.map(value => (
              <SelectItem key={value} value={value} className='text-xs'>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          className={Style.input}
          onChange={e => column.setFilterValue(e.target.value)}
          onClick={e => e.stopPropagation()}
          placeholder={`Search...`}
          type='text'
          value={(columnFilterValue ?? '') as string}
        />
      )}
    </motion.div>
  )
}

export default TableFilter
