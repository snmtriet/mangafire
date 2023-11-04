export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
  locale: string
  enableMock: boolean
}

const appConfig: AppConfig = {
  apiPrefix: '/api',
  authenticatedEntryPath: '/',
  unAuthenticatedEntryPath: '/sign-in',
  locale: 'en',
  enableMock: true,
}

export default appConfig
