import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import toast, { Toaster, useToasterStore } from 'react-hot-toast'
import store, { persistor } from './store'
import Layouts from './components/layouts'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/svg-arrow.css'

function App() {
  const { toasts } = useToasterStore()

  const TOAST_LIMIT = 1

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id))
  }, [toasts])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layouts />
        </BrowserRouter>
      </PersistGate>
      <Toaster position="bottom-right" />
    </Provider>
  )
}

export default App
