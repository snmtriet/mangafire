import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import appConfig from '@/configs/app.config'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'

import { ADMIN } from '@/constants/roles.constant'

import Loading from '@/components/shared/Loading'
import AppRoute from '@/components/route/AppRoute'
import PublicRoute from '@/components/route/PublicRoute'
import AuthorityGuard from '@/components/route/AuthorityGuard'
import ProtectedRoute from '@/components/route/ProtectedRoute'

const { authenticatedEntryPath } = appConfig

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <AuthorityGuard
                  userAuthority={[ADMIN]}
                  authority={route.authority}
                >
                  <AppRoute routeKey={route.key} component={route.component} />
                </AuthorityGuard>
              }
            />
          )
        })}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AppRoute routeKey={route.key} component={route.component} />
              }
            />
          )
        })}
      </Route>
    </Routes>
  )
}

const Views = () => {
  return (
    <Suspense
      fallback={
        <div className="loading-center">
          <Loading loading={true} type="gif" />
        </div>
      }
    >
      <AllRoutes />
    </Suspense>
  )
}

export default Views
