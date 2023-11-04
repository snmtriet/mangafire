import Views from '@/views'
import Header from '../template/Header'
import Footer from '../template/Footer'

const MainLayout = () => {
  return (
    <>
      <span className="bg" />
      <div className="wrapper">
        <Header />
        <main>
          <Views />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
