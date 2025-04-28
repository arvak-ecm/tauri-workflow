import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  return <h1 className='bg-primary text-primary-foreground text-center text-4xl'>Index</h1>
}
