import { useState, CSSProperties } from 'react'
import ChaptersMenu from './Menu'
import ChapterList from './List'
import { ENUM_READ_BY } from '@/@types/common'
import classNames from 'classnames'

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
  const [tab, setTab] = useState<ENUM_READ_BY>(ENUM_READ_BY.CHAPTER)

  const handleChangeTab = (tab: ENUM_READ_BY) => setTab(tab)

  return (
    <div className="content">
      <section className="m-list">
        <nav className="chapvol-tab">
          <button
            data-name="chapter"
            className={classNames(
              'tab',
              tab === ENUM_READ_BY.CHAPTER && 'active'
            )}
            onClick={() => handleChangeTab(ENUM_READ_BY.CHAPTER)}
          >
            Chapter
          </button>
          <button
            data-name="volume"
            className={classNames(
              'tab',
              tab === ENUM_READ_BY.VOLUME && 'active'
            )}
            onClick={() => handleChangeTab(ENUM_READ_BY.VOLUME)}
          >
            Volume
          </button>
        </nav>
        <div className="tab-content" data-name="chapter">
          <ChaptersMenu />
          <ChapterList tab={tab} />
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
