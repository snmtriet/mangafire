import classNames from 'classnames'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import {
  setActiveSwiper,
  setPageIndex,
  setShowSubPanel,
  useAppDispatch,
  useAppSelector,
} from '@/store'
import { useWindowDimensions } from '@/utils/hooks'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'

const SubPanelPage = () => {
  const { isShowSubPanel, pageIndex, pageType } = useAppSelector(
    (state) => state.theme
  )
  const dispatch = useAppDispatch()
  const { height } = useWindowDimensions()

  const handleClosePanel = () => dispatch(setShowSubPanel(null))

  const handleChangePage = (page: number) => {
    dispatch(setPageIndex(page))
    dispatch(setActiveSwiper(page))
  }

  return (
    <div
      className={classNames(
        'sub-panel scroll-sm',
        isShowSubPanel === SUB_PANEL_ENUM.PANEL_PAGE && 'active'
      )}
      id="page-panel"
      style={isMobile ? { maxHeight: height, position: 'fixed' } : {}}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <div className="head">
        <span></span>
        <button
          className="close-primary btn btn-secondary1"
          id="number-close"
          onClick={handleClosePanel}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
      <ul>
        {new Array(56).fill(undefined).map((chapter, index) => (
          <li key={index}>
            <Link
              to={`#page-${index + 1}`}
              title={chapter?.name}
              className={classNames(pageIndex === index + 1 && 'active')}
              onClick={() => handleChangePage(index + 1)}
            >
              Page {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubPanelPage
