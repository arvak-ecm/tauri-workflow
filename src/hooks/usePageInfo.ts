import { PageInfo } from '@/core/types/reactRouter.type'
import { isMatch, useMatches } from '@tanstack/react-router'

const usePageInfo = () => {
  const matches = useMatches()
  const pageInfo = matches
    .filter(match => isMatch(match, 'loaderData.pageInfo'))
    .map(({ loaderData }) => loaderData?.pageInfo || [])[0] as PageInfo
  return (
    pageInfo || {
      title: 'Page Not Found',
      description: 'Page not found',
      icon: null
    }
  )
}

export default usePageInfo
