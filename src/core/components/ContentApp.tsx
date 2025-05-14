import ModeToggle from '@/core/components/theme/ModeToggle'
import { cn } from '@/lib/utils'
import { SidebarPositionsEnum } from '@/core/data/Sidebar'
import { Outlet } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { SidebarSettings } from '@/core/types/sidebar.type'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import HeaderContentApp from '@/core/components/HeaderContentApp'
import SidebarTriggerApp from '@/core/components/sidebar/SidebarTriggerApp'

function ContentApp() {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  return (
    <>
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
      <section className='flex-1 overflow-hidden p-2'>
        <Outlet />
      </section>
    </>
  )
}

export default ContentApp
