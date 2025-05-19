import { appActiveAtom, appMenuActiveAtom } from '@/core/atom/app.store'
import { useAtom } from 'jotai'
import { AppProps } from '@/core/types/app.type'
import { getStoreAppSettingFile } from '@/core/functions/store'
import { MenuProps } from '@/core/types/menu.type'

function useApp() {
  const [appActive, setAppActiveState] = useAtom(appActiveAtom)
  const [_menu, setMenuApp] = useAtom(appMenuActiveAtom)

  const setAppActive = async (value: AppProps) => {
    const menuApp = (await getStoreAppSettingFile(`menu-${value.id}`)) as MenuProps
    setMenuApp(menuApp)
    setAppActiveState(value)
  }

  return {
    appActive,
    setAppActive
  }
}

export default useApp
