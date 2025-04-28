import { SwitchGroup } from '@/components/SwitchGroup'
import { Badge } from '@/components/ui/badge'
import { SidebarCollapsibleEnum, SidebarPositionsEnum, SidebarVariantsEnum } from '@/data/Sidebar'
import { capitalize } from '@/functions/global'
import { useSettings } from '@/hooks/useSettings'
import { Style } from './style'
import { SidebarSettings } from '@/contexts/settingsContext'
import PanelCustom from '@/components/customizer/panelCustom'

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
  const { settings, updateSettings, getSidebarSettings } = useSettings()

  const handleSidebarChange = <T extends keyof SidebarSettings['sidebar']>(key: T, value: string) => {
    const updatedSettings = {
      ...settings,
      sidebar: {
        ...settings.sidebar,
        [key]: value as SidebarSettings['sidebar'][T]
      }
    }
    updateSettings(updatedSettings)
  }

  return (
    <div className={Style.mainPage}>
      <PanelCustom title='Position'>
        <SwitchGroup
          activeItem={getSidebarSettings()?.position}
          switches={positionOptions}
          onChange={selected => handleSidebarChange('position', selected || SidebarPositionsEnum.Left)}
        />
      </PanelCustom>
      <PanelCustom title='Style' className='relative'>
        {getSidebarSettings()?.collapsible === SidebarCollapsibleEnum.None && (
          <div className='bg-primary/1 absolute inset-0'></div>
        )}

        <div className='flex flex-row items-center gap-4'>
          <SwitchGroup
            activeItem={getSidebarSettings()?.variant}
            switches={variantOptions}
            onChange={selected => handleSidebarChange('variant', selected || SidebarVariantsEnum.Sidebar)}
          />
          {getSidebarSettings()?.collapsible === SidebarCollapsibleEnum.None && (
            <Badge className='h-6'>⚠️ Style is disabled if Collapsible is set to None</Badge>
          )}
        </div>
      </PanelCustom>
      <PanelCustom title='Collapsible'>
        <SwitchGroup
          activeItem={getSidebarSettings()?.collapsible}
          switches={collapsibleOptions}
          onChange={selected => handleSidebarChange('collapsible', selected || SidebarCollapsibleEnum.None)}
        />
      </PanelCustom>
    </div>
  )
}

export default SidebarPage
