import { Configuration, LogLevel } from '@azure/msal-browser'

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_ENTRA_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_ENTRA_AUTHORITY}`,
    redirectUri: '/',
    postLogoutRedirectUri: '/logout',
    navigateToLoginRequestUrl: false
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  system: {
    allowPlatformBroker: false,
    loggerOptions: {
      piiLoggingEnabled: false,
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            //console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          default:
            return
        }
      }
    }
  }
}

export const loginRequest = {
  scopes: ['User.Read'],
  responseMode: 'query'
}

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
}
