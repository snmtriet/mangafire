import React, { useEffect, forwardRef } from 'react'
import classNames from 'classnames'
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import Image from '../Image'
import { fitClassName } from '../../Read'
import { PAGE_ENUM } from '@/constants/page.constant'
import {
  setActiveSwiper,
  setPageIndex,
  useAppDispatch,
  useAppSelector,
} from '@/store'

const imagePath = (index: number) => {
  return `/temp/0${index + 1 >= 10 ? index + 1 : `0${index + 1}`}.jpg`
}

type SingleProps = {}

const Single = forwardRef<React.RefObject<SwiperRef>, SingleProps>(
  (props, ref) => {
    const dispatch = useAppDispatch()
    const { pageType, fitType, activeSwiper, pageIndex, isSwiping } =
      useAppSelector((state) => state.theme)

    useEffect(() => {
      if (!ref) return
      const swiperRef = ref as React.RefObject<SwiperRef>
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current?.swiper.slideTo(activeSwiper - 1)
      }
    }, [ref, activeSwiper])

    if (pageType !== PAGE_ENUM.SINGLE) return <></>

    if (isSwiping) {
      return (
        <Swiper
          ref={ref as React.RefObject<SwiperRef>}
          modules={[EffectFade]}
          speed={500}
          grabCursor={true}
          slidesPerView="auto"
          className="pages singlepage"
          wrapperClass="page fit-w"
          onSlideChange={(swiper) => {
            dispatch(setPageIndex(swiper.activeIndex + 1))
            dispatch(setActiveSwiper(swiper.activeIndex + 1))
          }}
        >
          {new Array(56).fill(undefined).map((item, index) => (
            <SwiperSlide key={index} className="img loaded">
              <img
                src={imagePath(index)}
                className={fitClassName[fitType]}
                referrerPolicy="no-referrer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )
    }

    if (!isSwiping) {
      return (
        <div className={classNames('page', fitClassName[fitType])}>
          {new Array(56).fill(undefined).map((item, index) => (
            <Image
              key={index}
              src={imagePath(index)}
              number={index + 1}
              wrapperClassName={classNames(
                'loaded',
                pageIndex === index + 1 ? 'd-block' : 'd-none'
              )}
              imageClassName={fitClassName[fitType]}
            />
          ))}
        </div>
      )
    }
  }
)

export default Single
