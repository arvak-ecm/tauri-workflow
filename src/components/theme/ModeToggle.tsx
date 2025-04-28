import { useEffect } from 'react'
import { MoonStar, Sun } from 'lucide-react'
//import { useTheme } from 'next-themes'

// Hook Imports
import { useSettings } from '@/hooks/useSettings'
import type { ThemeMode } from '@/data/ThemeMode'
import { Button } from '../ui/button'

const ModeToggle = () => {
  //const { setTheme } = useTheme()
  const { settings, updateSettings } = useSettings()

  const handleClick = () => {
    const newMode: ThemeMode = settings.mode === 'dark' ? 'light' : 'dark'

    // Ensure both themes exist before switching
    const updatedSettings = {
      ...settings,
      mode: newMode,
      theme: {
        ...settings.theme,
        styles: {
          light: settings.theme.styles?.light || {},
          dark: settings.theme.styles?.dark || {}
        }
      }
    }
    updateSettings(updatedSettings)
    //setTheme(newMode)
  }

  useEffect(() => {
    if (settings.mode) {
      //setTheme(settings.mode)
    }
  }, [settings.mode])

  return (
    <Button variant='outline' size='icon' className='cursor-pointer' onClick={handleClick}>
      {settings.mode === 'dark' ? <Sun className='size-5' /> : <MoonStar className='size-5' />}
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}

export default ModeToggle
