import { appActiveAtom } from '@/core/atom/app.store'
import { useAtom } from 'jotai'
import { AppProps } from '@/core/types/app.type'

function useApp() {
  const [appActive, setAppActiveState] = useAtom(appActiveAtom)

  const setAppActive = (value: AppProps) => {
    setAppActiveState(value)
  }

  return {
    appActive,
    setAppActive
  }
}

export default useApp
