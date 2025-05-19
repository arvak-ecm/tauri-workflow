import SignInPage from '@/core/auth/clerk/signin.page'
import LoginMsal from '@/core/auth/msal/loginmsal'

const AUTH_TYPE = import.meta.env.VITE_AUTH_TYPE as 'MSAL' | 'CLERK'

function LoginPage() {
  if (AUTH_TYPE === 'MSAL') {
    return <LoginMsal />
  } else if (AUTH_TYPE === 'CLERK') {
    return <SignInPage />
  }
}

export default LoginPage
