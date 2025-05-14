import { Button } from '@shadcn/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@shadcn/card'
import { useMsal } from '@azure/msal-react'
import { startServerRust } from '@/auth/oauth'
import { useEffect } from 'react'
import { loginRequest } from '@/auth/msal/authConfig'
import { listen } from '@tauri-apps/api/event'
function LoginPage() {
  const { instance } = useMsal()

  useEffect(() => {
    const unlisten = async () => {
      await listen('login_uri', async event => {
        console.log('📥 Received login_uri event:', event)
      })
    }
    unlisten()
  }, [])

  const startOAuthFlow = async () => {
    try {
      const conn = await startServerRust(null)
      const port = conn?.port
      console.log(`🔐 OAuth server started on port ${port}`)

      // Inicia login OAuth (redirige al navegador)
      instance.loginRedirect({
        ...loginRequest,
        redirectUri: `${import.meta.env.VITE_ENTRA_REDIRECT_URI}`
        //redirectUri: 'http://localhost:1430/auth-success'
      })
    } catch (error) {
      console.error('🚨 Error en flujo OAuth:', error)
    }
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
          <Button variant='default' onClick={startOAuthFlow}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
