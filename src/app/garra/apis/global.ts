import { getPageInfo } from '@/app/garra/menu-app'
import { PageInfoType } from '@/core/types/reactRouter.type'
import { queryOptions, UseQueryOptions } from '@tanstack/react-query'

export const getPageInfoQuery = (pageName: string) =>
  queryOptions({
    queryKey: ['page_info'],
    queryFn: async (): Promise<PageInfoType> => getPageInfo(pageName) as PageInfoType,
    enabled: !!pageName,
    gcTime: 5000,
    staleTime: 0
  }) as UseQueryOptions<PageInfoType>
