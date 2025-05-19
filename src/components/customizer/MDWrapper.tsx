const MarkdownWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mb-10 flex w-full flex-col items-center gap-2 p-4'>
      <div className='prose ite w-full max-w-200'>{children}</div>
    </div>
  )
}

MarkdownWrapper.displayName = 'MarkdownWrapper'
export default MarkdownWrapper
