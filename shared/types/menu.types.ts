export interface MenuItem {
  key: string
  title: string
  url?: string
  icon?: React.ElementType
  isActive?: boolean
  menuItems?: MenuItem[]
  permission?: string
}

export interface MenuGroup {
  groupMenuName: string
  key: string
  menus: MenuItem[]
}
