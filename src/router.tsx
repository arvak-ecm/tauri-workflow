import { QueryClient } from '@tanstack/react-query'
import { createRouter as createReactRouter } from '@tanstack/react-router'
import NotFound from '@/core/components/react-router/not-found'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from '@/core/components/react-router/default-catch-boundary'
import { Spinner } from '@/components/customizer/Spinner'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
      staleTime: 60 * 1000,
      gcTime: Infinity
    }
  }
})

export function createRouter() {
  return createReactRouter({
    routeTree,
    context: { queryClient: queryClient },
    /*defaultViewTransition: {
        types: ({ fromLocation, toLocation }) => {
          let direction = 'none'

          if (fromLocation) {
            const fromIndex = fromLocation.state.__TSR_index
            const toIndex = toLocation.state.__TSR_index

            direction = fromIndex > toIndex ? 'right' : 'left'
          }

          return [`slide-${direction}`]
        }
      },*/
    defaultViewTransition: true,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    defaultPendingComponent: () => (
      <div className={`p-2 text-2xl`}>
        <Spinner />
      </div>
    ),
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 5000,
    scrollRestoration: true
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
