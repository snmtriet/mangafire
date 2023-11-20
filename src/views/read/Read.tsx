import { useRef } from 'react'
import classNames from 'classnames'
import { SwiperRef } from 'swiper/react'
import { useParams } from 'react-router-dom'
import { isMobile, isTablet } from 'react-device-detect'
import { FIT_ENUM } from '@/constants/fit.constant'
import { PAGE_ENUM } from '@/constants/page.constant'
import { setPageIndex, useAppDispatch, useAppSelector } from '@/store'
import { DoubleImage, LongStripImage, Single } from './components'

export const fitClassName = {
  [FIT_ENUM.FIT_WIDTH]: 'fit-w',
  [FIT_ENUM.FIT_HEIGHT]: 'fit-h',
  [FIT_ENUM.FIT_BOTH]: 'fit-w fit-h',
  [FIT_ENUM.FIT_NO_LIMIT]: '',
}

const imagePath = (index: number) => {
  return `/temp/0${index + 1 >= 10 ? index + 1 : `0${index + 1}`}.jpg`
}

const Read = () => {
  const swiperRef = useRef<SwiperRef>(null)
  const { slug, lang, chapter } = useParams()
  const dispatch = useAppDispatch()
  const { pageType, pageIndex, fitType } = useAppSelector(
    (state) => state.theme
  )

  const handleChangePage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const isMobileDevice =
      (isMobile || isTablet) && swiperRef.current && swiperRef.current.swiper
    if (!['singlepage', 'doublepage'].includes(pageType)) return
    const clickX =
      e.clientX - (e.target as HTMLDivElement).getBoundingClientRect().left
    const divWidth = (e.target as HTMLDivElement).offsetWidth
    const leftPercentage = (clickX / divWidth) * 100
    const rightPercentage = 100 - leftPercentage
    if (leftPercentage <= 30 && pageIndex > 1) {
      dispatch(setPageIndex(pageIndex - 1))
      if (isMobileDevice) {
        swiperRef.current?.swiper.slidePrev()
      }
    }
    if (rightPercentage <= 30 && pageIndex < 56 && pageIndex >= 1) {
      dispatch(setPageIndex(pageIndex + 1))
      if (isMobileDevice) {
        swiperRef.current?.swiper.slideNext()
      }
    }
  }

  return (
    <div
      className={classNames(
        'pages',
        pageType,
        pageType === PAGE_ENUM.PAGE_SINGLE && (isMobile || isTablet) && 'swiper'
      )}
      dir="ltr"
      onClick={handleChangePage}
    >
      {pageType === PAGE_ENUM.PAGE_LONG_STRIP && (
        <>
          {new Array(56).fill(undefined).map((item, index) => (
            <LongStripImage key={index} src={imagePath(index)} index={index} />
          ))}
        </>
      )}
      <Single swiperRef={swiperRef} />
      {pageType === PAGE_ENUM.PAGE_DOUBLE && (
        <div className={classNames('page', fitClassName[fitType])}>
          {new Array(56).fill(undefined).map((item, index) => (
            <DoubleImage key={index} src={imagePath(index)} index={index + 1} />
          ))}
        </div>
      )}

      <div className="number-nav ltr abs show">
        <button className="prev">
          <i className="ltr-icon fa-light fa-arrow-left mr-1"></i>
          <i className="rtl-icon fa-light fa-arrow-right ml-1"></i>
          Previous chapter
        </button>
        <button className="next">
          Next chapter
          <i className="ltr-icon fa-light fa-arrow-right ml-1"></i>
          <i className="rtl-icon fa-light fa-arrow-left mr-1"></i>
        </button>
      </div>
    </div>
  )
}

export default Read
