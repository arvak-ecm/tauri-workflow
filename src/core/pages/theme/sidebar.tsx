import { SwitchGroup } from '@/components/customizer/SwitchGroup'
import { Badge } from '@/components/ui/badge'
import { SidebarCollapsibleEnum, SidebarPositionsEnum, SidebarVariantsEnum } from '@/data/Sidebar'
import { capitalize } from '@/functions/global'
import { Style } from './style'
import { SidebarSettings } from '@/types/sidebar'
import PanelCustom from '@/components/customizer/panelCustom'
import { useAtom } from 'jotai'
import { sidebarSettingsAtom } from '@/atom/globals'

const variantOptions = [
  { id: SidebarVariantsEnum.Sidebar, label: capitalize(SidebarVariantsEnum.Sidebar) },
  { id: SidebarVariantsEnum.Inset, label: capitalize(SidebarVariantsEnum.Inset) },
  { id: SidebarVariantsEnum.Floating, label: capitalize(SidebarVariantsEnum.Floating) }
]

const collapsibleOptions = [
  { id: SidebarCollapsibleEnum.None, label: capitalize(SidebarCollapsibleEnum.None) },
  { id: SidebarCollapsibleEnum.Icon, label: capitalize(SidebarCollapsibleEnum.Icon) },
  { id: SidebarCollapsibleEnum.Offcanvas, label: capitalize(SidebarCollapsibleEnum.Offcanvas) }
]

const positionOptions = [
  { id: SidebarPositionsEnum.Left, label: capitalize(SidebarPositionsEnum.Left) },
  { id: SidebarPositionsEnum.Right, label: capitalize(SidebarPositionsEnum.Right) }
]

function SidebarPage() {
  const [sidebarSettings, setSidebarSetting] = useAtom<SidebarSettings>(sidebarSettingsAtom)

  const handleSidebarChange = <T extends keyof SidebarSettings>(key: T, value: string) => {
    setSidebarSetting({
      ...sidebarSettings,
      [key]: value as SidebarSettings[T]
    })
  }

  return (
    <div className={Style.mainPage}>
      <PanelCustom title='Position'>
        <SwitchGroup
          activeItem={sidebarSettings.position}
          switches={positionOptions}
          onChange={selected => handleSidebarChange('position', selected || SidebarPositionsEnum.Left)}
        />
      </PanelCustom>
      <PanelCustom title='Style' className='relative'>
        {sidebarSettings.collapsible === SidebarCollapsibleEnum.None && (
          <div className='bg-primary/1 absolute inset-0'></div>
        )}

        <div className='flex flex-row items-center gap-4'>
          <SwitchGroup
            activeItem={sidebarSettings.variant}
            switches={variantOptions}
            onChange={selected => handleSidebarChange('variant', selected || SidebarVariantsEnum.Sidebar)}
          />
          {sidebarSettings.collapsible === SidebarCollapsibleEnum.None && (
            <Badge className='h-6'>⚠️ Style is disabled if Collapsible is set to None</Badge>
          )}
        </div>
      </PanelCustom>
      <PanelCustom title='Collapsible'>
        <SwitchGroup
          activeItem={sidebarSettings.collapsible}
          switches={collapsibleOptions}
          onChange={selected => handleSidebarChange('collapsible', selected || SidebarCollapsibleEnum.None)}
        />
      </PanelCustom>
    </div>
  )
}

export default SidebarPage
