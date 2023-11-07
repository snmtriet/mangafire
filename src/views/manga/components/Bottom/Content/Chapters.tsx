import ChaptersMenu from './Menu'
import ChapterList from './List'
import { CSSProperties } from 'react'

const commentStyle: CSSProperties = {
  background:
    'url("https://c.disquscdn.com/next/embed/assets/img/loader-bg.a5b321d890ffdd553322adc8decaf4ed.png") 0px -52px no-repeat',
  height: '52px',
  width: '54px',
  margin: '0 auto',
  overflow: 'hidden',
  position: 'relative',
}

const Chapters = () => {
  return (
    <div className="content">
      <section className="m-list">
        <nav className="chapvol-tab">
          <button className="tab active" data-name="chapter">
            Chapter
          </button>
          <button className="tab" data-name="volume">
            Volume
          </button>
        </nav>
        <div className="tab-content" data-name="chapter">
          <ChaptersMenu />
          <ChapterList />
        </div>
      </section>
      <section className="default-style">
        <div className="head">
          <h2>Comment</h2>
        </div>
        <div className="body p-4">
          <div id="disqus_thread">
            <div dir="ltr" style={{ overflow: 'hidden' }}>
              <div style={commentStyle}></div>
              <p style={{ textAlign: 'center' }}>
                Disqus seems to be taking longer than usual.
                <a href="#"> Reload</a>?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Chapters
