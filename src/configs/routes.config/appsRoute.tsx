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
  {
    key: 'app.genre',
    path: '/genre/:slug',
    component: lazy(() => import('@/views/filter/Filter')),
    authority: [],
  },
  {
    key: 'app.newest',
    path: '/newest',
    component: lazy(() => import('@/views/filter/Filter')),
    authority: [],
  },
  {
    key: 'app.newest',
    path: '/newest',
    component: lazy(() => import('@/views/filter/Filter')),
    authority: [],
  },
  {
    key: 'app.updated',
    path: '/updated',
    component: lazy(() => import('@/views/filter/Filter')),
    authority: [],
  },
  {
    key: 'app.added',
    path: '/added',
    component: lazy(() => import('@/views/filter/Filter')),
    authority: [],
  },
  {
    key: 'app.manga',
    path: '/manga/:slug',
    component: lazy(() => import('@/views/manga')),
    authority: [],
  },
  {
    key: 'app.random',
    path: '/random',
    component: lazy(() => import('@/views/manga')),
    authority: [],
  },
  {
    key: 'app.read',
    path: '/read/:slug/:lang?/:chapter?',
    component: lazy(() => import('@/views/read')),
    authority: [],
  },
]

export default appsRoute
