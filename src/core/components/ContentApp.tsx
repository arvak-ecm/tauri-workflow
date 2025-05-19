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
    <div className='scrollbar-custom h-screen w-full overflow-y-auto'>
      <nav
        className={cn(
          'border-style-app bg-background/50 sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 flex-row items-center rounded-t-xl border-b backdrop-blur-sm transition-all duration-300'
        )}
      >
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
      <section className='w-full flex-1 flex-col p-2'>
        <Outlet />
      </section>
    </div>
  )
}

export default ContentApp
