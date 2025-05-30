import AppTable from '@/core/components/table/app-table'
import TableOptions from '@/core/components/table/table-options'
import { createColumnHelper } from '@tanstack/react-table'
import { RoleType } from '@/app/garra/types/roles'
import { getRolesQuery } from '@/app/garra/apis/roles'
const columnHelper = createColumnHelper<RoleType>()

const columns = [
  columnHelper.accessor('id', {
    header: 'Id',
    cell: info => info.getValue(),
    enableColumnFilter: false
  }),
  columnHelper.accessor('name', {
    header: 'Nombre',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: info => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true
  })
]

function RolesPage() {
  return (
    <div className='relative'>
      <h1>List of roles</h1>
      <AppTable columns={columns} queryOptions={getRolesQuery()}>
        <TableOptions className='absolute top-0 right-0 z-2' />
      </AppTable>
    </div>
  )
}

export default RolesPage
