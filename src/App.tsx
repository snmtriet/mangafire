import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import Layouts from './components/layouts'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layouts />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
