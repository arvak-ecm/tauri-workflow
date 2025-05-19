import { useAtomValue } from 'jotai'
import HeaderContentApp from '../HeaderContentApp'
import SidebarTriggerApp from './SidebarTriggerApp'
import { SidebarSettings } from '@/core/types/sidebar.type'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { SidebarPositionsEnum } from '@/core/data/Sidebar'
import { cn } from '@/lib/utils'
import ModeToggle from '../theme/ModeToggle'
import { Outlet } from '@tanstack/react-router'

interface Props {
  children: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  return (
    <div className='h-screen w-full overflow-y-auto'>
      <nav className='border-style-app sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 flex-row items-center rounded-t-xl border-b backdrop-blur-[8px]'>
        <SidebarTriggerApp />
        <HeaderContentApp />
        <div
          className={cn(
            'ml-auto flex flex-row gap-1 px-3',
            sidebarSettings.position === SidebarPositionsEnum.Right && 'mr-6'
          )}
        >
          <ModeToggle />
        </div>
      </nav>
      <section className='flex-1 p-2'>
        <Outlet />
      </section>
    </div>
  )
}

PageWrapper.displayName = 'PageWrapper'
export default PageWrapper
