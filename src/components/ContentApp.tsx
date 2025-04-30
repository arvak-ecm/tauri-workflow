import { SidebarTrigger } from './ui/sidebar'
import ModeToggle from './theme/ModeToggle'
import { useTheme } from '@/providers/ThemesProvider'
import { cn } from '@/lib/utils'
import { SidebarCollapsibleEnum, SidebarPositionsEnum } from '@/data/Sidebar'
import { Outlet } from '@tanstack/react-router'

function ContentApp() {
  const { getSidebarSettings } = useTheme()
  return (
    <>
      <nav className='sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 flex-row items-center rounded-t-xl border-b border-dashed backdrop-blur-[8px]'>
        <SidebarTrigger
          className={cn(
            'absolute top-0.5',
            getSidebarSettings()?.position === SidebarPositionsEnum.Left
              ? 'left-1.5 -ml-1'
              : 'right-1.5 -mr-1 ml-auto rotate-180',
            getSidebarSettings()?.collapsible === SidebarCollapsibleEnum.None && 'hidden'
          )}
        />
        <div className='flex w-full flex-row'>
          <h1 className='text-primary w-full text-center text-xl font-bold'>Vyc-Credits</h1>
        </div>
        <div
          className={cn(
            'ml-auto flex flex-row gap-1 px-3',
            getSidebarSettings()?.position === SidebarPositionsEnum.Right && 'mr-6'
          )}
        >
          <ModeToggle />
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default ContentApp
