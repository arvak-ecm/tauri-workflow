import { CasesResumeType } from '@/app/garra/types/cases'
import { formatDNI, generateRandomDNI } from '@/functions/dni'
import { queryOptions, UseQueryOptions } from '@tanstack/react-query'
import { random } from 'lodash'

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
    flowName: i % 3 === 0 ? 'GRC' : 'COMERCIALS',
    created: `name${i + 1} surname${i + 1}`,
    office: random(1, 999).toString().padStart(3, '0'),
    createdAt: new Date().toISOString(),
    stage: 'Pendiente',
    status: 'Pendiente',
    amount: '0'
  }))
  return new Promise(resolve => setTimeout(() => resolve(data), 1000))
}
