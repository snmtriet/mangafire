import classNames from 'classnames'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import {
  setPageIndex,
  setShowSubPanel,
  useAppDispatch,
  useAppSelector,
} from '@/store'

const SubPanelPage = () => {
  const { isShowSubPanel, pageIndex } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleClosePanel = () => dispatch(setShowSubPanel(null))

  const handleChangePage = (page: number) => {
    dispatch(setPageIndex(page))
  }

  return (
    <div
      className={classNames(
        'sub-panel scroll-sm',
        isShowSubPanel === SUB_PANEL_ENUM.PANEL_PAGE && 'active'
      )}
      id="page-panel"
    >
      <div className="head">
        <form autoComplete="off">
          <div className="form-group">
            <i className="fa-regular fa-magnifying-glass" />
            <input
              type="text"
              className="form-control"
              placeholder="Find number..."
            />
          </div>
        </form>
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
            <a
              href="#"
              title={chapter?.name}
              className={classNames(pageIndex === index + 1 && 'active')}
              onClick={() => handleChangePage(index + 1)}
            >
              Page {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubPanelPage
