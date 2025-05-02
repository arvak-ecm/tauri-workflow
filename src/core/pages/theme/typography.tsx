import SliderWithInput from '@/components/customizer/SliderWithInput'
import { Style } from './style'
import { updateBothThemes } from '@/core/functions/theme'
import { ThemeMode } from '@/core/data/ThemeMode'
import { useSettings } from '@/core/hooks/useSettings'
import { ThemeSettings } from '@/core/contexts/settingsContext'
import PanelCustom from '@/components/customizer/panelCustom'
import ThemeFontSelect from '@/components/customizer/ThemeFontSelect'
import { getAppliedThemeFont, sansSerifFonts, serifFonts, monoFonts } from '@/core/utils/theme-fonts'
import { DEFAULT_FONT_SANS, DEFAULT_FONT_SERIF, DEFAULT_FONT_MONO } from '@/core/config/theme'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

function TypographyPage() {
  const { settings, updateSettings } = useSettings()
  const currentStyles = (settings.theme.styles as Record<ThemeMode, any>)?.[settings.mode] || {}
  const [activeFontType, setActiveFontType] = useState<string>(
    currentStyles['font-default'].replace('var(--', '').replace(')', '').replace('(', '')
  )

  const handleThemeChange = <K extends keyof ThemeSettings>(key: K, value: string | number) => {
    const data = updateBothThemes(settings, { [key]: value })
    updateSettings(data)
  }

  const handleFontChange = (fontType: 'font-sans' | 'font-serif' | 'font-mono', value: string) => {
    const data = updateBothThemes(settings, { [fontType]: value })
    updateSettings(data)
  }
  const handleChangeFontType = (id: string) => {
    setActiveFontType(prev => {
      const newActive = prev === id ? prev : id
      const data = updateBothThemes(settings, { 'font-default': `var(--${newActive})` })
      console.log(data)
      updateSettings(data)
      return newActive
    })
  }
  return (
    <div className={Style.mainPage}>
      <PanelCustom>
        <SliderWithInput
          value={parseFloat(currentStyles.spacing?.replace('rem', '') || '0')}
          onChange={value => handleThemeChange('spacing' as keyof ThemeSettings, `${value}rem`)}
          min={0}
          max={2}
          step={0.001}
          unit='rem'
          label='Letter Spacing'
        />
      </PanelCustom>
      <PanelCustom title='Sans-Serif Font' className='relative'>
        <Switch
          className='absolute top-[6px] right-[6px]'
          id='font-sans'
          checked={activeFontType === 'font-sans'}
          onCheckedChange={() => handleChangeFontType('font-sans')}
        />
        <ThemeFontSelect
          disabled={activeFontType != 'font-sans'}
          fonts={sansSerifFonts}
          defaultValue={DEFAULT_FONT_SANS}
          currentFont={getAppliedThemeFont(currentStyles, 'font-sans')}
          onFontChange={value => handleFontChange('font-sans', value)}
        />
      </PanelCustom>
      <PanelCustom title='Serif Font' className='relative'>
        <Switch
          className='absolute top-[6px] right-[6px]'
          id='font-serif'
          checked={activeFontType === 'font-serif'}
          onCheckedChange={() => handleChangeFontType('font-serif')}
        />
        <ThemeFontSelect
          disabled={activeFontType != 'font-serif'}
          fonts={serifFonts}
          defaultValue={DEFAULT_FONT_SERIF}
          currentFont={getAppliedThemeFont(currentStyles, 'font-serif')}
          onFontChange={value => handleFontChange('font-serif', value)}
        />
      </PanelCustom>
      <PanelCustom title='Monospace Font' className='relative'>
        <Switch
          className='absolute top-[6px] right-[6px]'
          id='font-mono'
          checked={activeFontType === 'font-mono'}
          onCheckedChange={() => handleChangeFontType('font-mono')}
        />
        <ThemeFontSelect
          disabled={activeFontType != 'font-mono'}
          fonts={monoFonts}
          defaultValue={DEFAULT_FONT_MONO}
          currentFont={getAppliedThemeFont(currentStyles, 'font-mono')}
          onFontChange={value => handleFontChange('font-mono', value)}
        />
      </PanelCustom>
    </div>
  )
}

export default TypographyPage
