import { getInicialStateStore } from '@/core/functions/store'

import { appActiveAtom } from '@/core/atom/app.store'
import { avatarAtom } from '@/core/atom/avatar.store'
import { drawerIsOpen } from '@/core/atom/drawer.store'
import { typeFormNodes } from '@/core/atom/form.store'
import { sidebarSettingsAtom } from '@/core/atom/sidebar.store'
import { tableExportAtom, tableFilterAtom } from '@/core/atom/table.store'
import { appSettingsThemeAtom } from '@/core/atom/theme.store'

export const initialValues = [
  [appActiveAtom, getInicialStateStore('appActiveAtom')],
  [avatarAtom, getInicialStateStore('avatarAtom')],
  [sidebarSettingsAtom, getInicialStateStore('sidebarSettingsAtom')],
  [appSettingsThemeAtom, getInicialStateStore('app-settings-theme')],
  [drawerIsOpen, false],
  [typeFormNodes, 'NEW'],
  [tableExportAtom, false],
  [tableFilterAtom, false]
]
