/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ThemeImport } from './routes/theme'
import { Route as LogoutImport } from './routes/logout'
import { Route as AuthSuccessImport } from './routes/auth-success'
import { Route as IndexImport } from './routes/index'
import { Route as ThemeTypographyImport } from './routes/theme/typography'
import { Route as ThemeThemesImport } from './routes/theme/themes'
import { Route as ThemeSidebarImport } from './routes/theme/sidebar'
import { Route as ThemeOthersImport } from './routes/theme/others'
import { Route as GarraHomeImport } from './routes/garra/home'
import { Route as GarraDashboardImport } from './routes/garra/dashboard'
import { Route as DocbuilderDesignerImport } from './routes/docbuilder/designer'
import { Route as AuthAccountImport } from './routes/auth/account'
import { Route as GarraCaseCaseIdImport } from './routes/garra/case.$caseId'
import { Route as GarraAdminUsersImport } from './routes/garra/admin/users'
import { Route as GarraAdminRolesImport } from './routes/garra/admin/roles'

// Create/Update Routes

const ThemeRoute = ThemeImport.update({
  id: '/theme',
  path: '/theme',
  getParentRoute: () => rootRoute,
} as any)

const LogoutRoute = LogoutImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any)

const AuthSuccessRoute = AuthSuccessImport.update({
  id: '/auth-success',
  path: '/auth-success',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ThemeTypographyRoute = ThemeTypographyImport.update({
  id: '/typography',
  path: '/typography',
  getParentRoute: () => ThemeRoute,
} as any)

const ThemeThemesRoute = ThemeThemesImport.update({
  id: '/themes',
  path: '/themes',
  getParentRoute: () => ThemeRoute,
} as any)

const ThemeSidebarRoute = ThemeSidebarImport.update({
  id: '/sidebar',
  path: '/sidebar',
  getParentRoute: () => ThemeRoute,
} as any)

const ThemeOthersRoute = ThemeOthersImport.update({
  id: '/others',
  path: '/others',
  getParentRoute: () => ThemeRoute,
} as any)

const GarraHomeRoute = GarraHomeImport.update({
  id: '/garra/home',
  path: '/garra/home',
  getParentRoute: () => rootRoute,
} as any)

const GarraDashboardRoute = GarraDashboardImport.update({
  id: '/garra/dashboard',
  path: '/garra/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const DocbuilderDesignerRoute = DocbuilderDesignerImport.update({
  id: '/docbuilder/designer',
  path: '/docbuilder/designer',
  getParentRoute: () => rootRoute,
} as any)

const AuthAccountRoute = AuthAccountImport.update({
  id: '/auth/account',
  path: '/auth/account',
  getParentRoute: () => rootRoute,
} as any)

const GarraCaseCaseIdRoute = GarraCaseCaseIdImport.update({
  id: '/garra/case/$caseId',
  path: '/garra/case/$caseId',
  getParentRoute: () => rootRoute,
} as any)

const GarraAdminUsersRoute = GarraAdminUsersImport.update({
  id: '/garra/admin/users',
  path: '/garra/admin/users',
  getParentRoute: () => rootRoute,
} as any)

const GarraAdminRolesRoute = GarraAdminRolesImport.update({
  id: '/garra/admin/roles',
  path: '/garra/admin/roles',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth-success': {
      id: '/auth-success'
      path: '/auth-success'
      fullPath: '/auth-success'
      preLoaderRoute: typeof AuthSuccessImport
      parentRoute: typeof rootRoute
    }
    '/logout': {
      id: '/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof LogoutImport
      parentRoute: typeof rootRoute
    }
    '/theme': {
      id: '/theme'
      path: '/theme'
      fullPath: '/theme'
      preLoaderRoute: typeof ThemeImport
      parentRoute: typeof rootRoute
    }
    '/auth/account': {
      id: '/auth/account'
      path: '/auth/account'
      fullPath: '/auth/account'
      preLoaderRoute: typeof AuthAccountImport
      parentRoute: typeof rootRoute
    }
    '/docbuilder/designer': {
      id: '/docbuilder/designer'
      path: '/docbuilder/designer'
      fullPath: '/docbuilder/designer'
      preLoaderRoute: typeof DocbuilderDesignerImport
      parentRoute: typeof rootRoute
    }
    '/garra/dashboard': {
      id: '/garra/dashboard'
      path: '/garra/dashboard'
      fullPath: '/garra/dashboard'
      preLoaderRoute: typeof GarraDashboardImport
      parentRoute: typeof rootRoute
    }
    '/garra/home': {
      id: '/garra/home'
      path: '/garra/home'
      fullPath: '/garra/home'
      preLoaderRoute: typeof GarraHomeImport
      parentRoute: typeof rootRoute
    }
    '/theme/others': {
      id: '/theme/others'
      path: '/others'
      fullPath: '/theme/others'
      preLoaderRoute: typeof ThemeOthersImport
      parentRoute: typeof ThemeImport
    }
    '/theme/sidebar': {
      id: '/theme/sidebar'
      path: '/sidebar'
      fullPath: '/theme/sidebar'
      preLoaderRoute: typeof ThemeSidebarImport
      parentRoute: typeof ThemeImport
    }
    '/theme/themes': {
      id: '/theme/themes'
      path: '/themes'
      fullPath: '/theme/themes'
      preLoaderRoute: typeof ThemeThemesImport
      parentRoute: typeof ThemeImport
    }
    '/theme/typography': {
      id: '/theme/typography'
      path: '/typography'
      fullPath: '/theme/typography'
      preLoaderRoute: typeof ThemeTypographyImport
      parentRoute: typeof ThemeImport
    }
    '/garra/admin/roles': {
      id: '/garra/admin/roles'
      path: '/garra/admin/roles'
      fullPath: '/garra/admin/roles'
      preLoaderRoute: typeof GarraAdminRolesImport
      parentRoute: typeof rootRoute
    }
    '/garra/admin/users': {
      id: '/garra/admin/users'
      path: '/garra/admin/users'
      fullPath: '/garra/admin/users'
      preLoaderRoute: typeof GarraAdminUsersImport
      parentRoute: typeof rootRoute
    }
    '/garra/case/$caseId': {
      id: '/garra/case/$caseId'
      path: '/garra/case/$caseId'
      fullPath: '/garra/case/$caseId'
      preLoaderRoute: typeof GarraCaseCaseIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface ThemeRouteChildren {
  ThemeOthersRoute: typeof ThemeOthersRoute
  ThemeSidebarRoute: typeof ThemeSidebarRoute
  ThemeThemesRoute: typeof ThemeThemesRoute
  ThemeTypographyRoute: typeof ThemeTypographyRoute
}

const ThemeRouteChildren: ThemeRouteChildren = {
  ThemeOthersRoute: ThemeOthersRoute,
  ThemeSidebarRoute: ThemeSidebarRoute,
  ThemeThemesRoute: ThemeThemesRoute,
  ThemeTypographyRoute: ThemeTypographyRoute,
}

const ThemeRouteWithChildren = ThemeRoute._addFileChildren(ThemeRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth-success': typeof AuthSuccessRoute
  '/logout': typeof LogoutRoute
  '/theme': typeof ThemeRouteWithChildren
  '/auth/account': typeof AuthAccountRoute
  '/docbuilder/designer': typeof DocbuilderDesignerRoute
  '/garra/dashboard': typeof GarraDashboardRoute
  '/garra/home': typeof GarraHomeRoute
  '/theme/others': typeof ThemeOthersRoute
  '/theme/sidebar': typeof ThemeSidebarRoute
  '/theme/themes': typeof ThemeThemesRoute
  '/theme/typography': typeof ThemeTypographyRoute
  '/garra/admin/roles': typeof GarraAdminRolesRoute
  '/garra/admin/users': typeof GarraAdminUsersRoute
  '/garra/case/$caseId': typeof GarraCaseCaseIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth-success': typeof AuthSuccessRoute
  '/logout': typeof LogoutRoute
  '/theme': typeof ThemeRouteWithChildren
  '/auth/account': typeof AuthAccountRoute
  '/docbuilder/designer': typeof DocbuilderDesignerRoute
  '/garra/dashboard': typeof GarraDashboardRoute
  '/garra/home': typeof GarraHomeRoute
  '/theme/others': typeof ThemeOthersRoute
  '/theme/sidebar': typeof ThemeSidebarRoute
  '/theme/themes': typeof ThemeThemesRoute
  '/theme/typography': typeof ThemeTypographyRoute
  '/garra/admin/roles': typeof GarraAdminRolesRoute
  '/garra/admin/users': typeof GarraAdminUsersRoute
  '/garra/case/$caseId': typeof GarraCaseCaseIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth-success': typeof AuthSuccessRoute
  '/logout': typeof LogoutRoute
  '/theme': typeof ThemeRouteWithChildren
  '/auth/account': typeof AuthAccountRoute
  '/docbuilder/designer': typeof DocbuilderDesignerRoute
  '/garra/dashboard': typeof GarraDashboardRoute
  '/garra/home': typeof GarraHomeRoute
  '/theme/others': typeof ThemeOthersRoute
  '/theme/sidebar': typeof ThemeSidebarRoute
  '/theme/themes': typeof ThemeThemesRoute
  '/theme/typography': typeof ThemeTypographyRoute
  '/garra/admin/roles': typeof GarraAdminRolesRoute
  '/garra/admin/users': typeof GarraAdminUsersRoute
  '/garra/case/$caseId': typeof GarraCaseCaseIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth-success'
    | '/logout'
    | '/theme'
    | '/auth/account'
    | '/docbuilder/designer'
    | '/garra/dashboard'
    | '/garra/home'
    | '/theme/others'
    | '/theme/sidebar'
    | '/theme/themes'
    | '/theme/typography'
    | '/garra/admin/roles'
    | '/garra/admin/users'
    | '/garra/case/$caseId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth-success'
    | '/logout'
    | '/theme'
    | '/auth/account'
    | '/docbuilder/designer'
    | '/garra/dashboard'
    | '/garra/home'
    | '/theme/others'
    | '/theme/sidebar'
    | '/theme/themes'
    | '/theme/typography'
    | '/garra/admin/roles'
    | '/garra/admin/users'
    | '/garra/case/$caseId'
  id:
    | '__root__'
    | '/'
    | '/auth-success'
    | '/logout'
    | '/theme'
    | '/auth/account'
    | '/docbuilder/designer'
    | '/garra/dashboard'
    | '/garra/home'
    | '/theme/others'
    | '/theme/sidebar'
    | '/theme/themes'
    | '/theme/typography'
    | '/garra/admin/roles'
    | '/garra/admin/users'
    | '/garra/case/$caseId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthSuccessRoute: typeof AuthSuccessRoute
  LogoutRoute: typeof LogoutRoute
  ThemeRoute: typeof ThemeRouteWithChildren
  AuthAccountRoute: typeof AuthAccountRoute
  DocbuilderDesignerRoute: typeof DocbuilderDesignerRoute
  GarraDashboardRoute: typeof GarraDashboardRoute
  GarraHomeRoute: typeof GarraHomeRoute
  GarraAdminRolesRoute: typeof GarraAdminRolesRoute
  GarraAdminUsersRoute: typeof GarraAdminUsersRoute
  GarraCaseCaseIdRoute: typeof GarraCaseCaseIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthSuccessRoute: AuthSuccessRoute,
  LogoutRoute: LogoutRoute,
  ThemeRoute: ThemeRouteWithChildren,
  AuthAccountRoute: AuthAccountRoute,
  DocbuilderDesignerRoute: DocbuilderDesignerRoute,
  GarraDashboardRoute: GarraDashboardRoute,
  GarraHomeRoute: GarraHomeRoute,
  GarraAdminRolesRoute: GarraAdminRolesRoute,
  GarraAdminUsersRoute: GarraAdminUsersRoute,
  GarraCaseCaseIdRoute: GarraCaseCaseIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth-success",
        "/logout",
        "/theme",
        "/auth/account",
        "/docbuilder/designer",
        "/garra/dashboard",
        "/garra/home",
        "/garra/admin/roles",
        "/garra/admin/users",
        "/garra/case/$caseId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth-success": {
      "filePath": "auth-success.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/theme": {
      "filePath": "theme.tsx",
      "children": [
        "/theme/others",
        "/theme/sidebar",
        "/theme/themes",
        "/theme/typography"
      ]
    },
    "/auth/account": {
      "filePath": "auth/account.tsx"
    },
    "/docbuilder/designer": {
      "filePath": "docbuilder/designer.tsx"
    },
    "/garra/dashboard": {
      "filePath": "garra/dashboard.tsx"
    },
    "/garra/home": {
      "filePath": "garra/home.tsx"
    },
    "/theme/others": {
      "filePath": "theme/others.tsx",
      "parent": "/theme"
    },
    "/theme/sidebar": {
      "filePath": "theme/sidebar.tsx",
      "parent": "/theme"
    },
    "/theme/themes": {
      "filePath": "theme/themes.tsx",
      "parent": "/theme"
    },
    "/theme/typography": {
      "filePath": "theme/typography.tsx",
      "parent": "/theme"
    },
    "/garra/admin/roles": {
      "filePath": "garra/admin/roles.tsx"
    },
    "/garra/admin/users": {
      "filePath": "garra/admin/users.tsx"
    },
    "/garra/case/$caseId": {
      "filePath": "garra/case.$caseId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
