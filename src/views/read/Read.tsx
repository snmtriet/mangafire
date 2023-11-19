import classNames from 'classnames'
import { useParams } from 'react-router-dom'
import { isBrowser, isMobile, isTablet } from 'react-device-detect'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import { FIT_ENUM } from '@/constants/fit.constant'
import { PAGE_ENUM } from '@/constants/page.constant'
import { setPageIndex, useAppDispatch, useAppSelector } from '@/store'
import { DoubleImage, LongStripImage, SingleImage } from './components'
import { useRef } from 'react'

export const fitClassName = {
  [FIT_ENUM.FIT_WIDTH]: 'fit-w',
  [FIT_ENUM.FIT_HEIGHT]: 'fit-h',
  [FIT_ENUM.FIT_BOTH]: 'fit-w fit-h',
  [FIT_ENUM.FIT_NO_LIMIT]: '',
}

const Read = () => {
  const { pageType, pageIndex, fitType } = useAppSelector(
    (state) => state.theme
  )
  const { slug, lang, chapter } = useParams()
  const dispatch = useAppDispatch()
  const swiperRef = useRef(null)

  // console.log({ slug, lang, chapter })

  const handleChangePage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isBrowser) {
      if (!['singlepage', 'doublepage'].includes(pageType)) return
      const clickX =
        e.clientX - (e.target as HTMLDivElement).getBoundingClientRect().left
      const divWidth = (e.target as HTMLDivElement).offsetWidth
      const leftPercentage = (clickX / divWidth) * 100
      const rightPercentage = 100 - leftPercentage
      if (leftPercentage <= 30) {
        if (pageIndex > 1) {
          dispatch(setPageIndex(pageIndex - 1))
        }
      }
      if (rightPercentage <= 30) {
        if (pageIndex < 56 && pageIndex >= 1) {
          dispatch(setPageIndex(pageIndex + 1))
        }
      }
    }
    if (isMobile || isTablet) {
      // ? TODO swiper slideTo
    }
  }

  return (
    <div
      className={classNames(
        'pages',
        'swiper',
        pageType,
        pageType === PAGE_ENUM.PAGE_SINGLE && (isMobile || isTablet) && 'swiper'
      )}
      dir="ltr"
      onClick={handleChangePage}
    >
      {pageType === PAGE_ENUM.PAGE_LONG_STRIP && (
        <>
          {new Array(56).fill(undefined).map((item, index) => (
            <LongStripImage
              key={index}
              src={`/temp/0${
                index + 1 >= 10 ? index + 1 : `0${index + 1}`
              }.jpg`}
              index={index}
            />
          ))}
        </>
      )}

      {pageType === PAGE_ENUM.PAGE_SINGLE && (
        <>
          {false ? (
            <div className={classNames('page', fitClassName[fitType])}>
              {new Array(56).fill(undefined).map((item, index) => (
                <SingleImage
                  key={index}
                  index={index}
                  src={`/temp/0${
                    index + 1 >= 10 ? index + 1 : `0${index + 1}`
                  }.jpg`}
                />
              ))}
            </div>
          ) : (
            <Swiper
              ref={swiperRef}
              modules={[EffectFade]}
              speed={300}
              slidesPerView="auto"
              className="pages singlepage"
              wrapperClass="page fit-w"
              onSlideChange={(swiper) =>
                dispatch(setPageIndex(swiper.activeIndex))
              }
            >
              {new Array(56).fill(undefined).map((item, index) => (
                <SwiperSlide key={index} className="img loaded">
                  <img
                    src={`/temp/0${
                      index + 1 >= 10 ? index + 1 : `0${index + 1}`
                    }.jpg`}
                    className="fit-w"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}

      {pageType === PAGE_ENUM.PAGE_DOUBLE && (
        <div className={classNames('page', fitClassName[fitType])}>
          {new Array(56).fill(undefined).map((item, index) => (
            <DoubleImage
              key={index}
              src={`/temp/0${
                index + 1 >= 10 ? index + 1 : `0${index + 1}`
              }.jpg`}
              index={index + 1}
            />
          ))}
        </div>
      )}

      {/* <div className="number-nav ltr">
        <a className="prev">
          <i className="ltr-icon fa-light fa-arrow-left mr-1"></i>
          <i className="rtl-icon fa-light fa-arrow-right ml-1"></i>
          Previous chapter
        </a>
        <button className="next">
          Next chapter
          <i className="ltr-icon fa-light fa-arrow-right ml-1"></i>
          <i className="rtl-icon fa-light fa-arrow-left mr-1"></i>
        </button>
      </div> */}
    </div>
  )
}

export default Read
