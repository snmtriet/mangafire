import { useMemo, lazy, Suspense } from 'react'
import { Loading } from '../shared'

const Layout = () => {
  const AppLayout = useMemo(() => {
    return lazy(() => import('./MainLayout'))
  }, [])

  return (
    <Suspense
      fallback={
        <div className="loading-center">
          <Loading loading={true} type="gif" />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  )
}

export default Layout
