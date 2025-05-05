import { createFileRoute } from '@tanstack/react-router'

const pageInfo = {
  title: 'Index',
  description: 'Index page'
}

export const Route = createFileRoute('/')({
  loader: async () => pageInfo,
  component: Index
})

function Index() {
  return <h1 className='bg-primary text-primary-foreground text-center text-4xl'>Index</h1>
}
