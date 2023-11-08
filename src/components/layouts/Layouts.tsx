import { useMemo, lazy, Suspense, useEffect } from 'react'
import { Loading } from '../shared'
import { setLayout, useAppDispatch, useAppSelector } from '@/store'
import {
  LAYOUT_TYPE_DEFAULT,
  LAYOUT_TYPE_READ,
} from '@/constants/theme.constant'
import { useLocation } from 'react-router-dom'

const layouts = {
  default: lazy(() => import('./MainLayout')),
  read: lazy(() => import('./ReadLayout')),
}

const Layout = () => {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const {
    isShowMenu,
    isShowHeader,
    layout: { type: layoutType },
  } = useAppSelector((state) => state.theme)

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
      dispatch(setLayout('read'))
      return layouts[LAYOUT_TYPE_READ]
    } else {
      dispatch(setLayout('default'))
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
