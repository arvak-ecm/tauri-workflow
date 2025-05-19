import WrapperLogin from '@/core/components/WrapperLogin'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <WrapperLogin>
      <SignUp />
    </WrapperLogin>
  )
}

SignUpPage.displayName = 'SignUpPage'
export default SignUpPage
