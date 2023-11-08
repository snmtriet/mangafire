import { useMemo, lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '@/store'
import {
  LAYOUT_TYPE_DEFAULT,
  LAYOUT_TYPE_READ,
} from '@/constants/theme.constant'
import { Loading } from '../shared'

const layouts = {
  default: lazy(() => import('./MainLayout')),
  read: lazy(() => import('./ReadLayout')),
}

const Layout = () => {
  const { pathname } = useLocation()
  const { isShowMenu, isShowHeader } = useAppSelector((state) => state.theme)

  useEffect(() => {
    if (pathname.includes(LAYOUT_TYPE_READ)) {
      if (typeof document !== 'undefined') {
        document.body.className = 'read'
        if (isShowMenu) {
          document.body.classList.add('ctrl-menu-active')
        }
        if (!isShowHeader) {
          document.body.classList.add('header-hidden')
        }
      }
    }

    return () => {
      document.body.removeAttribute('class')
    }
  }, [isShowMenu, isShowHeader, pathname])

  const AppLayout = useMemo(() => {
    if (pathname.includes(LAYOUT_TYPE_READ)) {
      return layouts[LAYOUT_TYPE_READ]
    } else {
      return layouts[LAYOUT_TYPE_DEFAULT]
    }
  }, [pathname])

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
