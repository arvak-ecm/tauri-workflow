import SliderWithInput from '@/components/customizer/SliderWithInput'
import { Style } from './style'
import { updateBothThemes } from '@/core/functions/theme'
import { ThemeMode } from '@/core/data/ThemeMode'
import { useSettings } from '@/core/hooks/useSettings'
import { ThemeSettings } from '@/core/contexts/settingsContext'
import PanelCustom from '@/components/customizer/panelCustom'
import SwitchGroup from '@/components/customizer/SwitchGroup'

function OthersPage() {
  const { settings, updateSettings } = useSettings()
  const currentStyles = (settings.theme.styles as Record<ThemeMode, any>)?.[settings.mode] || {}

  const handleThemeChange = <K extends keyof ThemeSettings>(key: K, value: string | number) => {
    const data = updateBothThemes(settings, { [key]: value })
    updateSettings(data)
  }

  return (
    <div className={Style.mainPage}>
      <PanelCustom>
        <SliderWithInput
          value={parseFloat(currentStyles.radius?.replace('rem', '') || '0')}
          onChange={value => handleThemeChange('radius' as keyof ThemeSettings, `${value}rem`)}
          min={0}
          max={2.5}
          step={0.025}
          unit='rem'
          label='Radius'
        />
      </PanelCustom>
      <PanelCustom title='Border style'>
        <SwitchGroup
          activeItem={currentStyles['border-style']}
          switches={[
            { id: 'dashed', label: 'Dashed' },
            { id: 'solid', label: 'Solid' },
            { id: 'dotted', label: 'Dotted' },
            { id: 'groove', label: 'Groove' }
          ]}
          onChange={value => handleThemeChange('border-style' as keyof ThemeSettings, `${value}`)}
        />
      </PanelCustom>
    </div>
  )
}

export default OthersPage
