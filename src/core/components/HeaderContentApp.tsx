import LucideIcon from '@/components/customizer/LucideIcon'
import { SidebarPositionsEnum } from '@/core/data/Sidebar'
import usePageInfo from '@/hooks/usePageInfo'
import { cn } from '@/lib/utils'
import { SidebarSettings } from '@/core/types/sidebar'
import { useAtomValue } from 'jotai'
import { sidebarSettingsAtom } from '@/core/atom/sidebar'

interface HeaderNavProps {
  className?: string
}

const HeaderContentApp: React.FC<HeaderNavProps> = ({ className }) => {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  const pageInfo = usePageInfo()
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-start gap-2 pl-3',
        sidebarSettings.position === SidebarPositionsEnum.Left && 'pl-8',
        className
      )}
    >
      {pageInfo.icon && <LucideIcon iconName={pageInfo.icon} className='text-primary size-10' />}
      <div className='flex w-full flex-col items-start'>
        <h1 className='text-primary w-full text-xl font-bold'>{pageInfo.title}</h1>
        {pageInfo.description && <small className='text-xs'>{pageInfo.description}</small>}
      </div>
    </div>
  )
}

export default HeaderContentApp
