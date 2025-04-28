export type SidebarVariant = 'sidebar' | 'inset' | 'floating'
export type SidebarPosition = 'left' | 'right'

export enum SidebarVariantsEnum {
  Sidebar = 'sidebar',
  Inset = 'inset',
  Floating = 'floating'
}

export enum SidebarPositionsEnum {
  Left = 'left',
  Right = 'right'
}

export enum SidebarCollapsibleEnum {
  None = 'none',
  Icon = 'icon',
  Offcanvas = 'offcanvas',
  Undefined = 'undefined'
}

export type SidebarPositionsProps = SidebarPositionsEnum.Left | SidebarPositionsEnum.Right
export type SidebarVariantsProps =
  | SidebarVariantsEnum.Sidebar
  | SidebarVariantsEnum.Inset
  | SidebarVariantsEnum.Floating

export type SidebarCollapsibleProps = 'none' | 'icon' | 'offcanvas' | undefined
