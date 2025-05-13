import { AccountInfo } from '@azure/msal-browser'

export const accountTest: AccountInfo[] = [
  {
    homeAccountId: 'test',
    environment: 'test',
    tenantId: 'test',
    username: 'test@test.com',
    localAccountId: 'test',
    name: 'Test User App'
  }
]

export const fakeAccount = {
  homeAccountId: 'fake-home-account-id',
  environment: 'fake-environment',
  tenantId: 'fake-tenant-id',
  username: 'fakeuser@example.com',
  localAccountId: 'fake-local-account-id',
  name: 'Fake User'
}
