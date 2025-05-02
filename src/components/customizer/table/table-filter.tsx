import { isFilterTableAtom } from '@/atom/store-table'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Column, Table } from '@tanstack/react-table'
import { useAtomValue } from 'jotai'
import { motion } from 'motion/react'
const Style = {
  input: 'text-xs w-full h-7',
  inputNumber: 'w-10 p-1 h-7'
}

function TableFilter({ column, table }: { column: Column<any, any>; table: Table<any> }) {
  const isFilter = useAtomValue(isFilterTableAtom)
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()
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
