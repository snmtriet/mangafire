import Views from '@/views'
import { useAppSelector } from '@/store'
import Header from '../template/Read/Header'
import ControlMenu from './components/ControlMenu'
import ProgressBar from './components/ProgressBar'

const ReadLayout = () => {
  const { pageType } = useAppSelector((state) => state.theme)

  return (
    <>
      <span className="bg" />
      <div className="wrapper">
        <Header />
        <main className={pageType}>
          <div className="m-content">
            <div id="page-wrapper">
              <Views />
            </div>
            <ProgressBar />
          </div>
          <ControlMenu />
        </main>
      </div>
    </>
  )
}

export default ReadLayout
