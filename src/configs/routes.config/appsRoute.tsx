import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
  {
    key: 'app.welcome',
    path: '/',
    component: lazy(() => import('@/views/welcome')),
    authority: [],
  },
  {
    key: 'app.home',
    path: '/home',
    component: lazy(() => import('@/views/home')),
    authority: [],
  },
  {
    key: 'app.filter',
    path: '/filter',
    component: lazy(() => import('@/views/filter')),
    authority: [],
  },
]

export default appsRoute
