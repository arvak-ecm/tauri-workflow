import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { AppProps } from "@/core/types/app.type";
import { menuApp as menuAppGarra } from '@/app/garra/data/menu-app'


export const getAppMenuQuery = (app: AppProps) =>
  queryOptions({
    queryKey: ['get_menu_app_active'],
    queryFn: async (): Promise<CasesResumeType[]> =>{
      switch (app.id) {
        case 'garra':
          return await getMenuGarra()
        case 'doc-builder':
          return await getMenuDocBuilder()
        default:
          return await getMenuGarra()
    },
    enabled: true
  }) as UseQueryOptions<CasesResumeType[]>


const async getMenuGarra = (): Promise<CasesResumeType[]> => {
  const menu = [
    { id: 'home' },
    { id: 'new-case', children: ['new-case'] },
    { id: 'dashboard' },
    { id: 'admin', children: ['admin-users', 'admin-roles'] }
  ]

  menuAppGarra.storeMenuGroup.forEach(group => {



}

const async getMenuDocBuilder = (): Promise<CasesResumeType[]> => {}
