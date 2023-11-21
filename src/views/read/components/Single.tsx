import React, { useEffect, forwardRef } from 'react'
import classNames from 'classnames'
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { isBrowser, isMobile, isTablet } from 'react-device-detect'
import Image from './Image'
import { fitClassName } from '../Read'
import { PAGE_ENUM } from '@/constants/page.constant'
import { setPageIndex, useAppDispatch, useAppSelector } from '@/store'

const imagePath = (index: number) => {
  return `/temp/0${index + 1 >= 10 ? index + 1 : `0${index + 1}`}.jpg`
}

type SingleProps = {}

const Single = forwardRef<React.RefObject<SwiperRef>, SingleProps>(
  (props, ref) => {
    const dispatch = useAppDispatch()
    const { pageType, fitType, activeSwiper, pageIndex } = useAppSelector(
      (state) => state.theme
    )

    useEffect(() => {
      if (!ref) return
      const swiperRef = ref as React.RefObject<SwiperRef>
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current?.swiper.slideTo(activeSwiper - 1)
      }
    }, [ref, activeSwiper])

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
                      isBrowser && pageIndex === index + 1
                        ? 'd-block'
                        : 'd-none',
                      (isTablet || isMobile) && !isBrowser && 'd-block'
                    )}
                    imageClassName={fitClassName[fitType]}
                  />
                ))}
              </div>
            ) : (
              <Swiper
                ref={ref as React.RefObject<SwiperRef>}
                modules={[EffectFade]}
                speed={500}
                slidesPerView="auto"
                className="pages singlepage"
                wrapperClass="page fit-w"
                onSlideChange={(swiper) =>
                  dispatch(setPageIndex(swiper.activeIndex + 1))
                }
              >
                {new Array(56).fill(undefined).map((item, index) => (
                  <SwiperSlide key={index} className="img loaded">
                    <img
                      src={imagePath(index)}
                      className="fit-w"
                      referrerPolicy="no-referrer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        )}
      </>
    )
  }
)

export default Single
