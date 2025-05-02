import { QueryClient } from '@tanstack/react-query'
import { createRouter as createReactRouter } from '@tanstack/react-router'
import NotFound from '@/core/components/react-router/not-found'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from '@/core/components/react-router/default-catch-boundary'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
      gcTime: 1000 * 60 * 60,
      staleTime: Infinity
    }
  }
})

export function createRouter() {
  return createReactRouter(
    createReactRouter({
      routeTree,
      context: { queryClient: queryClient },
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: () => <NotFound />,
      scrollRestoration: true
    })
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
