type FetchOptions = {
  method: 'GET' | 'POST'
  headers: Record<string, string>
  params?: Record<string, string>
  body?: any
  url: string
}

async function fetchWithRetry(options: FetchOptions) {
  const { method, headers, params, body, url } = options
  const queryParams = new URLSearchParams(params).toString()
  const fullUrl = queryParams ? `${url}?${queryParams}` : url

  try {
    const response = await fetch(fullUrl, {
      method,
      headers,
      body: JSON.stringify(body)
    })

    if (response.status === 401) {
      // Obtener nuevo token
      const tokenResponse = await fetch('https://example.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ grant_type: 'refresh_token' })
      })

      const tokenData = await tokenResponse.json()
      const newToken = tokenData.access_token

      // Actualizar encabezados con el nuevo token
      headers['Authorization'] = `Bearer ${newToken}`

      // Reintentar la solicitud original con el nuevo token
      const retryResponse = await fetch(fullUrl, {
        method,
        headers,
        body: JSON.stringify(body)
      })

      return retryResponse.json()
    }

    return response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Ejemplo de uso
const options: FetchOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer initial_token',
    'Exchange.HTTP_QUERY': 'petipdo=R&penumdo=12345'
  },
  url: 'https://example.com/api/resource'
}

fetchWithRetry(options)
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
