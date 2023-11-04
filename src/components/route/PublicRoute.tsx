import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
  const authenticated = true

  return authenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet />
}

export default PublicRoute
