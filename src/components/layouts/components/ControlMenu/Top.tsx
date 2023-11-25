import { Link } from 'react-router-dom'
import {
  setActiveSwiper,
  setPageIndex,
  setShowMenu,
  setShowSubPanel,
  useAppDispatch,
  useAppSelector,
} from '@/store'
import { SubPanelType } from '@/@types/theme'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import { ChapVolSwitch, LangSwitch } from './Buttons'
import scrollToPage from '@/utils/scrollToPage'

const Top = () => {
  const dispatch = useAppDispatch()
  const { isShowMenu, pageIndex, isShowSubPanel, activeSwiper } =
    useAppSelector((state) => state.theme)

  const onToggleMenu = () => {
    dispatch(setShowMenu(!isShowMenu))
  }

  const handlePrevPage = () => {
    if (pageIndex > 1) {
      dispatch(setPageIndex(pageIndex - 1))
      dispatch(setActiveSwiper(activeSwiper - 1))
      scrollToPage(pageIndex - 1)
    }
  }

  const handleNextPage = () => {
    if (pageIndex < 56 && pageIndex >= 1) {
      dispatch(setPageIndex(pageIndex + 1))
      dispatch(setActiveSwiper(activeSwiper + 1))
      scrollToPage(pageIndex + 1)
    }
  }

  const handleTogglePanel = (type: SubPanelType) => {
    dispatch(setShowSubPanel(type === isShowSubPanel ? null : type))
  }

  return (
    <>
      <div className="head">
        <Link to="/manga/jujutsu-kaisen.rl2vm">Jujutsu Kaisen</Link>
        <div
          onClick={onToggleMenu}
          className="close-primary btn btn-secondary1 tooltipz"
          id="ctrl-menu-close"
          title="Use M button to toggle"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <ChapVolSwitch />
      <LangSwitch />

      {/* Page */}
      <nav>
        <button className="page-btn" id="page-go-left" onClick={handlePrevPage}>
          <i className="fa-regular fa-chevron-left"></i>
        </button>
        <button
          className="page-toggler"
          onClick={() => handleTogglePanel(SUB_PANEL_ENUM.PANEL_PAGE)}
        >
          <b>
            Page <span className="current-page">{pageIndex}</span>
          </b>
          <i className="fa-solid fa-sort fa-sm"></i>
        </button>
        <button
          className="page-btn"
          id="page-go-right"
          onClick={handleNextPage}
        >
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </nav>
      {/* Chapter */}
      <nav>
        <button id="number-go-left">
          <i className="fa-regular fa-chevron-left"></i>
        </button>
        <button
          className="number-toggler"
          onClick={() => handleTogglePanel(SUB_PANEL_ENUM.PANEL_CHAPTER)}
        >
          <b className="current-type-number text-title">chapter 240</b>
          <i className="fa-solid fa-sort fa-sm"></i>
        </button>
        <button id="number-go-right">
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </nav>
      {/* Comment */}
      <button
        id="comment-toggler"
        className="jb-btn"
        onClick={() => handleTogglePanel(SUB_PANEL_ENUM.PANEL_COMMENT)}
      >
        <i className="fa-light fa-message-dots fa-flip-horizontal fa-lg"></i>
        <span>
          <span className="current-type-number text-title">chapter 240 </span>
          Comment
        </span>
      </button>
      {/* Bookmark */}
      <div className="dropdown favourite" data-id="26256" data-fetch="true">
        <button className="jb-btn">
          <i className="fa-light fa-folder-bookmark fa-lg"></i>
          <span>Bookmark</span>
        </button>
        <div className="dropdown-menu dropdown-menu-right w-100 folders"></div>
      </div>

      <Link to="/manga/jujutsu-kaisen.rl2vm" className="jb-btn">
        <i className="fa-light fa-lg fa-circle-info"></i>
        <span>Manga Detail</span>
      </Link>
      <button className="jb-btn" data-toggle="modal" data-target="#report">
        <i className="fa-light fa-lg fa-triangle-exclamation"></i>
        <span>Report Error</span>
      </button>
    </>
  )
}

export default Top
