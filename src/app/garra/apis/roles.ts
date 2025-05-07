import { RoleType } from '@/app/garra/types/roles'
import { queryOptions, UseQueryOptions } from '@tanstack/react-query'

export const getRolesQuery = () =>
  queryOptions({
    queryKey: ['list_roles_renegociated'],
    queryFn: async (): Promise<RoleType[]> => await getRoles(),
    enabled: true
  }) as UseQueryOptions<RoleType[]>

const getRoles = (): Promise<RoleType[]> => {
  const roles: RoleType[] = Array.from({ length: 100 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `Role ${i + 1}`,
    description: `role ${i + 1} example.com`
  }))
  return new Promise(resolve => setTimeout(() => resolve(roles), 3000))
}
