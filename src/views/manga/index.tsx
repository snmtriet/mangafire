import {
  ContentBottom,
  ContentTop,
  SidebarBottom,
  SidebarTop,
} from './components'

const MangaPage = () => {
  return (
    <div id="manga-page">
      <div className="manga-detail">
        <div className="detail-bg">
          <img src="/detail.jpeg" alt="Jujutsu Kaisen" />
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
