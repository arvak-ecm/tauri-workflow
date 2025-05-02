import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useSettings } from '@/core/hooks/useSettings'
import { Link, Outlet, useRouter } from '@tanstack/react-router'
import { RotateCcw } from 'lucide-react'

const TabsData = [
  {
    name: 'Themes',
    href: '/theme/themes'
  },
  {
    name: 'Typography',
    href: '/theme/typography'
  },
  {
    name: 'Sidebar',
    href: '/theme/sidebar'
  },
  {
    name: 'Others',
    href: '/theme/others'
  }
]

function ThemePage() {
  const { resetToDefault } = useSettings()
  const router = useRouter()
  const segments = router.state.location.pathname.split('/').filter(Boolean)
  let lastSegment = segments[segments.length - 1]

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex w-xl flex-col gap-2 p-4'>
        <section className='flex justify-end'>
          <Button variant='outline' className='cursor-pointer' onClick={resetToDefault}>
            <RotateCcw className='size-5' />
            Reset
          </Button>
        </section>
        <section className='flex'>
          <Tabs defaultValue={lastSegment} className='w-full'>
            <TabsList className='w-full'>
              {TabsData.map(tab => (
                <TabsTrigger key={tab.name} value={tab.href} asChild>
                  <Link to={tab.href}>{tab.name}</Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </section>
        <main className='w-full'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ThemePage
