import { Button } from '@shadcn/button'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from '@/core/auth/msal/authConfig'
import WrapperLogin from '@/core/components/WrapperLogin'

const LoginMsal = () => {
  const { instance } = useMsal()

  const startOAuthFlow = async () => {
    try {
      instance.loginRedirect({
        ...loginRequest
      })
    } catch (error) {
      console.error('🚨 Error en flujo OAuth:', error)
    }
  }
  return (
    <WrapperLogin>
      <Button variant='default' onClick={startOAuthFlow}>
        Login
      </Button>
    </WrapperLogin>
  )
}

LoginMsal.displayName = 'LoginMsal'
export default LoginMsal
