import { UserType } from '@/app/garra/types/user'
import { queryOptions, UseQueryOptions } from '@tanstack/react-query'

export const getUsersQuery = () =>
  queryOptions({
    queryKey: ['list_users_renegociated'],
    queryFn: async (): Promise<UserType[]> => await getUsers(),
    enabled: true
  }) as UseQueryOptions<UserType[]>

const getUsers = (): Promise<UserType[]> => {
  const users: UserType[] = Array.from({ length: 100 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 5 === 0 ? 'admin' : 'user' // every 5th user is an admin
  }))
  return new Promise(resolve => setTimeout(() => resolve(users), 5000))
}
