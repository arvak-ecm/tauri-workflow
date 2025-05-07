import { queryOptions, UseQueryOptions } from '@tanstack/react-query'


const path = '/v1/customers'



/*export const getBasicDataQuery = () =>
  queryOptions({
    queryKey: ['list_cases_home'],
    queryFn: async (): Promise<CasesResumeType[]> => await getCasesResume(),
    enabled: true
  }) as UseQueryOptions<CasesResumeType[]>
*/

export function getBasicData(penumdo: string) {
  const uri = '/basic-data'
  const headers = new Headers()
  headers.append('channel', '')
  headers.append('user', '')
  const params = new URLSearchParams()
  params.append('penumdo', penumdo)
  params.append('petipdo', 'R')


  const response = fetch(path + uri,


}
