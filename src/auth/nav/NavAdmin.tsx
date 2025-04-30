import SideBarGroupCollapsible from '@/components/customizer/SidebarGroupCollapsible'
import { ShieldUser, UserIcon, Users } from 'lucide-react'

const menuAdmin = {
  title: 'Admin',
  icon: UserIcon,
  menu: [
    {
      name: 'Users',
      icon: Users,
      href: '/admin/users'
    },
    {
      name: 'Roles',
      icon: ShieldUser,
      href: '/admin/roles'
    }
  ]
}

function NavAdmin() {
  return <SideBarGroupCollapsible className='' menu={menuAdmin} />
}

export default NavAdmin
