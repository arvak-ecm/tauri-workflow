import { getUsersQuery } from '@/app/renegociated/apis/users'
import AppTable from '@/components/customizer/table/app-table'
import TableOptions from '@/components/customizer/table/table-options'
import { createColumnHelper } from '@tanstack/react-table'
import { useEffect } from 'react'

type UserType = {
  id: string
  name: string
}

const columnHelper = createColumnHelper<UserType>()

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
  })
]

function UsersPage() {
  useEffect(() => {
    const server = async () => {
      const result = await fetch('http://localhost:3000/ping')
      const json = await result.json()
      console.log(json)
    }
    server()
  }, [])

  return (
    <div className='relative'>
      <h1>List of users</h1>
      <AppTable columns={columns} queryOptions={getUsersQuery()}>
        <TableOptions className='absolute top-0 right-0 z-2' />
      </AppTable>
    </div>
  )
}
export default UsersPage
