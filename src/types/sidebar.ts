type SidebarVariant = 'sidebar' | 'inset' | 'floating'
type SidebarPosition = 'left' | 'right'
type SidebarCollapsible = 'none' | 'icon' | 'offcanvas'

export type SidebarSettings = {
  position: SidebarPosition
  variant: SidebarVariant
  collapsible: SidebarCollapsible
}

export interface MenuSingle {
  type: 'single'
  id: string
  name: string
  description?: string
  icon: string
  href: string
}

export interface MenuGroup {
  type: 'group'
  id: string
  nameGroup: string
  name: string
  icon: string
  subMenu: MenuSingle[]
}

export type MenuItem = { id: string; children?: string[] }
export type Menu = MenuItem[]
