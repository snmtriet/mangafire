import { useRef, useEffect } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import Image from './Image'
import { fitClassName } from '../Read'
import { PAGE_ENUM } from '@/constants/page.constant'
import { setPageIndex, useAppDispatch, useAppSelector } from '@/store'
import { isBrowser, isMobile, isTablet } from 'react-device-detect'

const imagePath = (index: number) => {
  return `/temp/0${index + 1 >= 10 ? index + 1 : `0${index + 1}`}.jpg`
}

type SingleProps = {
  swiperRef: React.RefObject<SwiperRef>
}

const Single = (props: SingleProps) => {
  const { swiperRef } = props
  const dispatch = useAppDispatch()
  const { pageType, fitType, activeSwiper, pageIndex } = useAppSelector(
    (state) => state.theme
  )

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current?.swiper.slideTo(activeSwiper - 1)
    }
  }, [swiperRef, activeSwiper])

  return (
    <>
      {pageType === PAGE_ENUM.PAGE_SINGLE && (
        <>
          {isBrowser ? (
            <div className={classNames('page', fitClassName[fitType])}>
              {new Array(56).fill(undefined).map((item, index) => (
                <Image
                  key={index}
                  src={imagePath(index)}
                  number={index + 1}
                  wrapperClassName={classNames(
                    'loaded',
                    isBrowser && pageIndex === index + 1 ? 'd-block' : 'd-none',
                    (isTablet || isMobile) && !isBrowser && 'd-block'
                  )}
                  imageClassName={fitClassName[fitType]}
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
                dispatch(setPageIndex(swiper.activeIndex + 1))
              }
            >
              {new Array(56).fill(undefined).map((item, index) => (
                <SwiperSlide key={index} className="img loaded">
                  <img src={imagePath(index)} className="fit-w" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}
    </>
  )
}

export default Single
