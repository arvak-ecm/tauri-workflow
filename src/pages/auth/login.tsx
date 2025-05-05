import { loginRequest } from '@/auth/msal/authConfig'
import { startServerRust, stopCurrentServer } from '@/auth/oauth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useMsal } from '@azure/msal-react'

function LoginPage() {
  const { instance } = useMsal()

  const handleLogin = async () => {
    await startServerRust(1420)
    instance
      .loginRedirect({
        ...loginRequest,
        redirectUri: 'http://localhost:1420'
      })
      .then(async () => {
        console.log('Login success')
        await stopCurrentServer(1420, true)
        //await startServerTS()
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
