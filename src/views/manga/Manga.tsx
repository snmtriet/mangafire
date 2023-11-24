import { useEffect } from 'react'
import {
  ContentBottom,
  ContentTop,
  SidebarBottom,
  SidebarTop,
} from './components'

const MangaPage = () => {
  useEffect(() => {
    document.title = 'Jujutsu Kaisen Manga - Read Manga Online Free'
  }, [])

  return (
    <div id="manga-page">
      <div className="manga-detail">
        <div className="detail-bg">
          <img src="/detail.jpg" alt="Jujutsu Kaisen" />
        </div>
        <div className="container">
          <div className="main-inner">
            <ContentTop />
            <SidebarTop />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-inner manga-bottom">
          <ContentBottom />
          <SidebarBottom />
        </div>
      </div>
    </div>
  )
}

export default MangaPage
