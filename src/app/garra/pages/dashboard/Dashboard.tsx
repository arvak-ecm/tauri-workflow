function DashboardPage() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-gray-500'>Welcome to your dashboard!</p>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {/* Add your dashboard cards or components here */}
      </div>
    </div>
  )
}

export default DashboardPage
