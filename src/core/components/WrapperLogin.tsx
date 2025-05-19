import { motion, AnimatePresence } from 'framer-motion'

type Props = { children: React.ReactNode }

const WrapperLogin: React.FC<Props> = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='flex h-screen w-screen items-center justify-center'
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        className='bg-card text-card-foreground flex w-200 max-w-200 flex-row gap-0 rounded-sm border p-0 shadow-sm'
      >
        <div className='relative flex w-[50%] flex-col gap-2'>
          <img src='/images/logo.png' alt='Spectra' className='absolute top-10 z-2 w-full' />
          <div className='absolute inset-0 z-1 h-full w-full border-2 border-none'></div>
        </div>

        <div className='flex w-[50%] flex-col gap-2'>{children}</div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)

WrapperLogin.displayName = 'WrapperLogin'
export default WrapperLogin

/*

        style={{
          background: `repeating-linear-gradient(-45deg, rgba(243, 104, 18, 0.07), rgba(243, 104, 18, 0.07) 6px, rgba(243, 104, 18, 0.11) 6px, rgba(243, 104, 18, 0.11) 12px)`,
          WebkitMaskImage: 'linear-gradient(transparent 0%, black)',
          maskImage: 'linear-gradient(transparent 0%, black)'
        }}

*/
