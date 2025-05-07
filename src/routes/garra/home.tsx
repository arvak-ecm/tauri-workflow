import HomePage from '@/app/garra/pages/home/HomePage'
import { createFileRoute } from '@tanstack/react-router'
import { getCasesResumeQuery } from '@/app/garra/apis/cases'
import { getPageInfo } from '@/app/garra/menu-app'

export const Route = createFileRoute('/garra/home')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(getCasesResumeQuery())
    return { pageInfo: getPageInfo('home') }
  },
  component: HomePage
})
