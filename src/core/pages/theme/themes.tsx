import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useSettings } from '@/core/hooks/useSettings'
import { presets } from '@/core/utils/theme-presets'
import { useMemo } from 'react'
import { ThemeStyleProps } from '@/core/types/theme'
import { defaultThemeState } from '@/core/config/theme'
import { Style } from '@/core/pages/theme/style'
import PanelCustom from '@/components/customizer/panelCustom'

function ThemesPage() {
  const { settings, applyThemePreset } = useSettings()

  const presetNames = useMemo(() => {
    const allPresets = Object.keys(presets)
    const presetsWithBadges = allPresets.filter(name => presets[name]?.meta?.badge)
    const presetsWithoutBadges = allPresets.filter(name => !presets[name]?.meta?.badge)
    presetsWithBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    presetsWithoutBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    return ['default', ...presetsWithBadges, ...presetsWithoutBadges.filter(name => name !== 'default')]
  }, [presets])

  /*const getThemeBadge = (themeName: string) => {
    if (themeName === 'default') return null
    return presets[themeName]?.meta?.badge || null
  }*/

  const getThemeColor = (themeName: string, color: keyof ThemeStyleProps) => {
    const theme = themeName === 'default' ? defaultThemeState : presets[themeName]
    return theme?.light?.[color] || theme?.dark?.[color] || '#000000'
  }

  const value = presetNames?.find(name => name === settings.theme.preset)

  return (
    <div className={Style.mainPage}>
      <PanelCustom title='Presets themes'>
        <Select value={value || ''} onValueChange={applyThemePreset}>
          <SelectTrigger className='w-80 cursor-pointer'>
            <SelectValue placeholder='Chose Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pre Built Themes</SelectLabel>
              {presetNames.map(name => {
                //const badge = getThemeBadge(name)

                return (
                  <SelectItem key={name} value={name} className='flex items-center gap-3'>
                    {/* Theme Color Grid Icon */}
                    <div className='flex items-center'>
                      <div className='bg-background relative size-[26px] rounded border p-1'>
                        <div className='grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]'>
                          <div className='rounded-[2px]' style={{ backgroundColor: getThemeColor(name, 'primary') }} />
                          <div
                            className='rounded-[2px]'
                            style={{ backgroundColor: getThemeColor(name, 'destructive') }}
                          />
                          <div
                            className='rounded-[2px]'
                            style={{ backgroundColor: getThemeColor(name, 'secondary') }}
                          />
                          <div className='rounded-full' style={{ backgroundColor: getThemeColor(name, 'accent') }} />
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span>{name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                    </div>
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </PanelCustom>
    </div>
  )
}

export default ThemesPage
