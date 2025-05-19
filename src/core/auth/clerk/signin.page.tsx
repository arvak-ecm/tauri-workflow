import WrapperLogin from '@/core/components/WrapperLogin'
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <WrapperLogin>
      <SignIn />
    </WrapperLogin>
  )
}

SignInPage.displayName = 'SignInPage'
export default SignInPage
