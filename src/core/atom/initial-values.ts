import { getInicialStateStore } from '@/core/functions/store'

import { appActiveAtom, appListAtom, appMenuActiveAtom } from '@/core/atom/app.store'
import { avatarAtom } from '@/core/atom/avatar.store'
import { drawerIsOpen } from '@/core/atom/drawer.store'
import { typeFormNodes } from '@/core/atom/form.store'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { tableExportAtom, tableFilterAtom } from '@/core/atom/table.store'
import { appSettingsThemeAtom } from '@/core/atom/theme.store'

export const initialValues = [
  [appListAtom, getInicialStateStore('appListAtom')],
  [appActiveAtom, getInicialStateStore('appActiveAtom')],
  [appMenuActiveAtom, getInicialStateStore('appMenuActiveAtom')],
  [avatarAtom, getInicialStateStore('avatarAtom')],
  [sidebarSettingsAtom, getInicialStateStore('sidebarSettingsAtom')],
  [appSettingsThemeAtom, getInicialStateStore('app-settings-theme')],
  [drawerIsOpen, false],
  [typeFormNodes, 'NEW'],
  [tableExportAtom, false],
  [tableFilterAtom, false]
]
