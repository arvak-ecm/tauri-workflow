import { SidebarTrigger } from '@/components/ui/sidebar'
import ModeToggle from '@/core/components/theme/ModeToggle'
import { cn } from '@/lib/utils'
import { SidebarCollapsibleEnum, SidebarPositionsEnum } from '@/data/Sidebar'
import { Outlet } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { SidebarSettings } from '@/types/sidebar'
import { sidebarSettingsAtom } from '@/atom/globals'
import usePageInfo from '@/hooks/usePageInfo'
import LucideIcon from '@/components/customizer/LucideIcon'

function ContentApp() {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  return (
    <>
      <nav className='border-style-app sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 flex-row items-center rounded-t-xl border-b backdrop-blur-[8px]'>
        <SidebarTrigger
          className={cn(
            'absolute top-0.5',
            sidebarSettings.position === SidebarPositionsEnum.Left
              ? 'left-1.5 -ml-1'
              : 'right-1.5 -mr-1 ml-auto rotate-180',
            sidebarSettings.collapsible === SidebarCollapsibleEnum.None && 'hidden'
          )}
        />
        <div
          className={cn(
            'flex w-full flex-row justify-start pl-3',
            sidebarSettings.position === SidebarPositionsEnum.Left && 'pl-8'
          )}
        >
          <Header />
        </div>
        <div
          className={cn(
            'ml-auto flex flex-row gap-1 px-3',
            sidebarSettings.position === SidebarPositionsEnum.Right && 'mr-6'
          )}
        >
          <ModeToggle />
        </div>
      </nav>
      <main className='flex-1 overflow-hidden p-2'>
        <Outlet />
      </main>
    </>
  )
}

function Header() {
  const pageInfo = usePageInfo()
  return (
    <div className='text-primary flex flex-row items-center justify-center gap-2'>
      {pageInfo.icon && <LucideIcon iconName={pageInfo.icon} className='text-primary size-12' />}
      <div className='flex w-full flex-col items-start'>
        <h1 className='text-primary w-full text-xl font-bold'>{pageInfo.title}</h1>
        {pageInfo.description && <small className='text-xs'>{pageInfo.description}</small>}
      </div>
    </div>
  )
}

export default ContentApp
