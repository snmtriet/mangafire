import Views from '@/views'
import Header from '../template/Default/Header'
import Footer from '../template/Default/Footer'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

const MainLayout = () => {
  const { pathname } = useLocation()
  return (
    <>
      <span className="bg" />
      <div className="wrapper">
        <Header />
        <main className={classNames(pathname === '/' && 'index')}>
          <Views />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
