import { fetch } from '@tauri-apps/plugin-http'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID_OXPLUS
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET_OXPLUS
const HOST_SSM = import.meta.env.VITE_HOST_SSM

export async function getToken() {
  const headers = new Headers()
  headers.append('Content-Type', 'application/x-www-form-urlencoded')
  headers.append('Authorization', `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`)
  headers.append('oauth_type', 'iam')

  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')

  const response = await fetch(`${HOST_SSM}/oauth/token`, {
    method: 'POST',
    headers,
    body: params.toString(),
    danger: {
      acceptInvalidCerts: true,
      acceptInvalidHostnames: true
    }
  })

  if (!response.ok) {
    throw new Error('Error al obtener el token')
  }

  const data = await response.json()
  return data.access_token
}
