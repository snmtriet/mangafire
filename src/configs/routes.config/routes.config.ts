import { Routes } from '@/@types/routes'
import authRoute from './authRoute'
import appsRoute from './appsRoute'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [...appsRoute]
