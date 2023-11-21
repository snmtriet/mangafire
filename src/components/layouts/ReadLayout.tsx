import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { isMobile, isTablet, isBrowser } from 'react-device-detect'
import Views from '@/views'
import {
  setActiveSwiper,
  setPageIndex,
  setShowHeader,
  setShowMenu,
  useAppDispatch,
  useAppSelector,
} from '@/store'
import Header from '../template/Read/Header'
import ControlMenu from './components/ControlMenu'
import ProgressBar from './components/ProgressBar'
import { useWindowDimensions } from '@/utils/hooks'
import {
  SubPanelChapter,
  SubPanelComment,
  SubPanelPage,
} from './components/SubPanel'
import { PAGE_ENUM } from '@/constants/page.constant'
import classNames from 'classnames'
import { AdvancedModal } from '@/views/read/components'

const ReadLayout = () => {
  const { pageType, isShowMenu, isShowHeader, pageIndex, activeSwiper } =
    useAppSelector((state) => state.theme)
  const [isClickable, setIsClickable] = useState(true)
  const dispatch = useAppDispatch()
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (!isShowHeader && !isShowMenu) {
      let content = ''
      if (isBrowser) {
        content = 'Press H or move your mouse to the top to show header'
      }
      if (isMobile || isTablet) {
        content = 'Double tap to show header'
      }
      toast.info(content)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isShowMenu, isShowHeader, width, pageIndex])

  function handleKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case 'm':
        dispatch(setShowMenu(!isShowMenu))
        return
      case 'h':
        dispatch(setShowHeader(!isShowHeader))
        return
      case 'n':
        return
      case 'b':
        return
      case 'ArrowLeft':
        if (pageIndex > 1) {
          dispatch(setPageIndex(pageIndex - 1))
          dispatch(setActiveSwiper(activeSwiper - 1))
        }
        return
      case 'ArrowRight':
        if (pageIndex < 56 && pageIndex >= 1) {
          dispatch(setPageIndex(pageIndex + 1))
          dispatch(setActiveSwiper(activeSwiper + 1))
        }
        return
      default:
        return
    }
  }

  function handleDoubleClick() {
    if (isBrowser) return
    if (!isClickable) return
    setIsClickable(false)
    dispatch(setShowHeader(!isShowHeader))
    setTimeout(() => setIsClickable(true), 1500)
  }

  function handleCloseControl() {
    if (isBrowser) return
    dispatch(setShowMenu(false))
  }

  const styleMaxHeight =
    pageType === PAGE_ENUM.SINGLE && !isBrowser && (isTablet || isMobile)
      ? {
          maxHeight: height,
        }
      : {}

  return (
    <>
      <span className="bg" />
      <div className="wrapper" onDoubleClick={handleDoubleClick}>
        <Header />
        <main className={pageType} style={styleMaxHeight}>
          <div className="m-content">
            <div
              id="page-wrapper"
              className={classNames(
                isBrowser && pageIndex === 56 && 'on-last-page'
              )}
              onClick={handleCloseControl}
            >
              <Views />
            </div>
            <ProgressBar />
            <SubPanelChapter />
            <SubPanelPage />
            <SubPanelComment />
          </div>
          <ControlMenu />
        </main>
      </div>
      <AdvancedModal />
    </>
  )
}

export default ReadLayout
