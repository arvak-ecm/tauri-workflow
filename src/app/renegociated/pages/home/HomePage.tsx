import TableOptions from '@/components/customizer/table/table-options'
import { createColumnHelper } from '@tanstack/react-table'
import { CasesResumeType } from '@renegociated/types/cases'
import { getCasesResumeQuery } from '../../apis/cases'
import { Link } from '@tanstack/react-router'
import AppTable from '@/components/customizer/table/app-table'
import { cn } from '@/lib/utils'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
//id, rut, nombre cliente producto, responsable, sucursal, fecha creacion, etapa, estado, monto operacion
const columnHelper = createColumnHelper<CasesResumeType>()
const columns = [
  columnHelper.accessor('id', {
    header: 'Id',
    size: 20,
    cell: info => (
      <Link to='/' className='hover:text-primary'>
        {info.getValue()}
      </Link>
    ),
    enableColumnFilter: false
  }),
  columnHelper.accessor('dni', {
    header: 'Rut',
    size: 10,
    cell: info => info.getValue(),
    enableColumnFilter: true
  }),
  columnHelper.accessor('nameCustomer', {
    header: 'Nombre Cliente',
    size: 0,
    cell: info => info.getValue(),
    enableColumnFilter: true
  }),
  columnHelper.accessor('flowName', {
    header: 'Producto',
    size: 15,
    cell: info => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
    meta: {
      filterVariant: 'select'
    }
  })
]

function HomePage() {
  return (
    <div className='flex w-full flex-1 flex-col gap-4'>
      <HeroPage />
      <div className='relative'>
        <AppTable columns={columns} queryOptions={getCasesResumeQuery()} className='min-w-[900px]'>
          <TableOptions className='absolute -top-13 right-1 z-2' />
        </AppTable>
      </div>
    </div>
  )
}
HomePage.displayName = 'HomePage'
export default HomePage

function HeroPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className='bg-primary/4 shadow-primary relative z-0 h-11 w-full overflow-hidden rounded-sm shadow-lg'>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-5',
          'z-1'
        )}
      />
      {children}
    </div>
  )
}
