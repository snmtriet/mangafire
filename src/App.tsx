import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import Layouts from './components/layouts'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/svg-arrow.css'

function App() {
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
