import { BrowserRouter } from 'react-router-dom'

import Layouts from './components/layouts'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  )
}

export default App
