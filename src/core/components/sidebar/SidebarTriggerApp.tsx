import { SidebarTrigger } from '@shadcn/sidebar'
import { useAtomValue } from 'jotai'
import { SidebarSettings } from '@/core/types/sidebar.type'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { SidebarPositionsEnum, SidebarCollapsibleEnum } from '@/core/data/Sidebar'
import { cn } from '@/lib/utils'

const SidebarTriggerApp = () => {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  return (
    <SidebarTrigger
      className={cn(
        'absolute top-0.5',
        sidebarSettings.position === SidebarPositionsEnum.Left
          ? 'left-1.5 -ml-1'
          : 'right-1.5 -mr-1 ml-auto rotate-180',
        sidebarSettings.collapsible === SidebarCollapsibleEnum.None && 'hidden'
      )}
    />
  )
}

SidebarTriggerApp.displayName = 'SidebarTriggerApp'
export default SidebarTriggerApp
