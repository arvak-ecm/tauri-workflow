import { formatDNI, generateRandomDNI } from '@/functions/dni'
import { CasesResumeType } from '@renegociated/types/cases'
import { queryOptions, UseQueryOptions } from '@tanstack/react-query'

export const getCasesResumeQuery = () =>
  queryOptions({
    queryKey: ['list_cases_home'],
    queryFn: async (): Promise<CasesResumeType[]> => await getCasesResume(),
    enabled: true
  }) as UseQueryOptions<CasesResumeType[]>

const getCasesResume = (): Promise<CasesResumeType[]> => {
  const data: CasesResumeType[] = Array.from({ length: 25 }, (_, i) => ({
    id: (i + 1).toString(),
    dni: formatDNI(generateRandomDNI()),
    nameCustomer: `name${i + 1} surname${i + 1}`,
    flowName: i % 3 === 0 ? 'GRC' : 'COMERCIALS'
  }))
  return new Promise(resolve => setTimeout(() => resolve(data), 1000))
}
