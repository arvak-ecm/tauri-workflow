import { sidebarIsOpenAtom, sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { SidebarPositionsEnum } from '@/core/data/Sidebar'
import { SidebarSettings } from '@/core/types/sidebar.type'
import { useAtomValue } from 'jotai'
import AppSidebar from './AppSidebar'
import { SidebarInset, SidebarProvider } from '@shadcn/sidebar'
import ContentApp from '../ContentApp'

const AppSidebarProvider = () => {
  const sidebarSettings = useAtomValue<SidebarSettings>(sidebarSettingsAtom)
  const isOpen = useAtomValue<boolean>(sidebarIsOpenAtom)
  return (
    <SidebarProvider defaultOpen={isOpen} className='overflow-hidden'>
      {sidebarSettings.position === SidebarPositionsEnum.Left && <AppSidebar />}
      <SidebarInset className='overflow-hidden'>
        <ContentApp />
      </SidebarInset>
      {sidebarSettings.position === SidebarPositionsEnum.Right && <AppSidebar />}
    </SidebarProvider>
  )
}

AppSidebarProvider.displayName = 'AppSidebarProvider'
export default AppSidebarProvider
