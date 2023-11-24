import classNames from 'classnames'
import { isMobile } from 'react-device-detect'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import { setShowSubPanel, useAppDispatch, useAppSelector } from '@/store'
import { useWindowDimensions } from '@/utils/hooks'

const SubPanelComment = () => {
  const { isShowSubPanel } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  const { height } = useWindowDimensions()

  const handleClosePanel = () => dispatch(setShowSubPanel(null))

  return (
    <div
      className={classNames(
        'sub-panel scroll-sm',
        isShowSubPanel === SUB_PANEL_ENUM.PANEL_COMMENT && 'active'
      )}
      id="comment-panel"
      style={isMobile ? { maxHeight: height, position: 'fixed' } : {}}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <div className="head">
        <b>Comments</b>
        <div
          className="close-primary btn btn-secondary1"
          id="comment-close"
          onClick={handleClosePanel}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="body p-3">
        <div id="disqus_thread">
          <div dir="ltr" style={{ overflow: 'hidden' }}>
            <div
              style={{
                background:
                  'url("https://c.disquscdn.com/next/embed/assets/img/loader-bg.a5b321d890ffdd553322adc8decaf4ed.png") 0px -52px no-repeat',
                height: 52,
                width: 54,
                margin: '0px auto',
                overflow: 'hidden',
                position: 'relative',
              }}
            />
            <p style={{ textAlign: 'center' }}>
              Disqus seems to be taking longer than usual.
              <a href="#">Reload</a>?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubPanelComment
