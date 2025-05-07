import { Edit, Trash2 } from 'lucide-react'
import { Button } from '@shadcn/button'
import { Row } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import React from 'react'

interface ActionsRowProps<T> {
  row: Row<T>
  formEdit: React.ReactNode
  formDelete: React.ReactNode
  onClickEdit: (data: T) => void
}

function ActionsRow<T>({ row, formEdit, formDelete }: ActionsRowProps<T>) {
  return (
    <div
      className={cn(
        'invisible flex w-full flex-row items-center justify-center gap-1 transition-all duration-50',
        'group-hover:visible'
      )}
    >
      <Button
        className='hover:text-blue-500'
        size='rowTable'
        variant='ghost'
        tooltip='Modificar'
        /*onClick={() => {
          setDrawerContent({
            typeForm: 'EDIT',
            title: 'Modificar',
            description: 'Modificar',
            form: formEdit,
            data: row.original as Record<string, any>
          })
          setOpenDrawer(true)
        }}*/
      >
        <Edit className='hover:text-blue-500' />
      </Button>
      <Button
        className='hover:text-red-500'
        size='rowTable'
        variant='ghost'
        tooltip='Eliminar'
        /*onClick={() => {
          setDrawerContent({
            typeForm: 'DELETE',
            title: 'Eliminar',
            description: 'Eliminar',
            form: formDelete,
            data: row.original as Record<string, any>
          })
          setOpenDrawer(true)
        }}*/
      >
        <Trash2 className='hover:text-red-500' />
      </Button>
    </div>
  )
}

export default ActionsRow
