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
    }
  }

  const handleNextPage = () => {
    if (pageIndex < 56 && pageIndex >= 1) {
      dispatch(setPageIndex(pageIndex + 1))
      dispatch(setActiveSwiper(activeSwiper + 1))
    }
  }

  const handleTogglePanel = (type: SubPanelType) => {
    if (type === isShowSubPanel) {
      dispatch(setShowSubPanel(null))
    } else {
      dispatch(setShowSubPanel(type))
    }
  }

  return (
    <>
      <div className="head">
        <Link to="/manga/jujutsu-kaisen.rl2vm">Jujutsu Kaisen</Link>
        <div
          onClick={onToggleMenu}
          className="close-primary btn btn-secondary1 tooltipz"
          id="ctrl-menu-close"
          title=""
          data-original-title="Use M button to toggle"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <button className="chapvol-switch">
        <div>
          <p>you are reading</p>
          <b>
            by <span className="current-viewtype">chapter</span>
          </b>
        </div>
        <i className="fa-light fa-arrows-rotate"></i>
      </button>
      <div className="dropdown mb-2">
        <button
          className="justify-content-center"
          data-toggle="dropdown"
          data-placeholder="false"
        >
          <i className="fa-regular fa-earth-americas"></i>
          <span className="mx-1">Language: </span>
          <b className="lang-view">English</b>
        </button>
        <div className="lang-options dropdown-menu w-100 dropdown-menu-right">
          <Link
            className="dropdown-item active"
            to="#"
            data-code="en"
            data-title="English"
          >
            <i className="flag EN"></i> English
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="fr"
            data-title="French"
          >
            <i className="flag FR"></i> French
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="es"
            data-title="Spanish"
          >
            <i className="flag ES"></i> Spanish
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="es-la"
            data-title="Spanish (LATAM)"
          >
            <i className="flag ES-LA"></i> Spanish (LATAM)
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="pt-br"
            data-title="Portuguese (Br)"
          >
            <i className="flag PT-BR"></i> Portuguese (Br)
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="ja"
            data-title="Japanese"
          >
            <i className="flag JA"></i> Japanese
          </Link>
        </div>
      </div>
      <nav>
        <button id="page-go-left" onClick={handlePrevPage}>
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
        <button id="page-go-right" onClick={handleNextPage}>
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </nav>
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
      <div className="dropdown favourite" data-id="26256" data-fetch="true">
        <button
          className="jb-btn"
          type="button"
          data-toggle="dropdown"
          data-placeholder="false"
          aria-expanded="false"
        >
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
