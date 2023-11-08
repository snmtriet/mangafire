import { combineReducers, CombinedState, AnyAction, Reducer } from 'redux'
import auth, { AuthState } from './slices/auth'
import theme, { ThemeState } from './slices/theme/themeSlice'

export type RootState = CombinedState<{
  auth: CombinedState<AuthState>
  theme: ThemeState
}>

export interface AsyncReducers {
  [key: string]: Reducer<any, AnyAction>
}

const staticReducers = {
  auth,
  theme,
}

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    })
    return combinedReducer(state, action)
  }

export default rootReducer
