import { loginRequest } from '@/auth/msal/authConfig'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useMsal } from '@azure/msal-react'

function LoginPage() {
  const { instance } = useMsal()

  const handleLogin = async () => {
    instance.loginRedirect(loginRequest).catch(error => {
      console.error('Login error:', error)
    })
  }

  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <Card className='min-w-[70%]'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>¡Bienvenido!</CardTitle>
          <CardDescription className='text-lg'>Accede a tu cuenta utilizando tu identidad de Microsoft</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button variant='default' onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
