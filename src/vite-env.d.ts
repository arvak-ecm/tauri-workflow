/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: 'development' | 'production'
  readonly VITE_AUTH_TYPE: 'MSAL' | 'CLERK'
  readonly VITE_CLERK_KEY: string
  readonly VITE_APP_TITLE: string
  readonly VITE_ENTRA_CLIENT_ID: string
  readonly VITE_ENTRA_REDIRECT_URI: string
  readonly VITE_ENTRA_AUTHORITY: string
  readonly VITE_AUTH_ACTIVATED: string
  readonly VITE_DNI_CHL_LENGTH: number

  readonly VITE_HOST_SSM: string
  readonly VITE_GATEWAY_VYC: string
  readonly VITE_CLIENT_ID_OXPLUS: string
  readonly VITE_CLIENT_SECRET_OXPLUS: string

  readonly VITE_USER_HOST_OXPLUS: { channel: string; user: string }
  readonly VITE_USER_HOST_OB: { channel: string; user: string }
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
