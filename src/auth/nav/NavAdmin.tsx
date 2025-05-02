import SideBarGroupCollapsible from '@/components/customizer/SidebarGroupCollapsible'
import { ServerCog, ShieldUser, Users } from 'lucide-react'

const menuAdmin = {
  title: 'Admin',
  icon: ServerCog,
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
  return <SideBarGroupCollapsible className='group/admin' menu={menuAdmin} />
}

export default NavAdmin
