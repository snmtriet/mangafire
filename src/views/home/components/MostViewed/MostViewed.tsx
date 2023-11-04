import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'

import Head from './Head'
import { Loading, Poster } from '@/components/shared'

const data = [
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/fd/fd22997ad7669f6cd375b98fc27361a5.jpg',
    title: 'Jujutsu Kaisen',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/5e/5e727f402d8f75a168be15447e92dd6d.jpg',
    title: 'One Piece',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/80/80719de2923370cb8652b78b6c3eedbd.jpg',
    title: 'One-Punch Man',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg',
    title: 'That Time I Got Reincarnated as a Slime',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/12/1241e84e2e02d198ffa3c7f691806a46.jpg',
    title: 'Chainsaw Man',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/fb/fb84efb9a088b2a4d1bc07e4162f1623.jpg',
    title: 'The Eminence in Shadow',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/9/9e/9edb016580e3b80cd71fd67fc83f910f.jpg',
    title: 'Shangri-La Frontier',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/e/e0/e0040bddc879f4d2715d85477be21fec.jpg',
    title: 'My Blasted Reincarnated Life',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f8/f810119c0f9d8acdb43257a2888036b9.jpg',
    title: 'Kagurabachi',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/41/41734c44365b532a9e16fbd392705a26.jpg',
    title: "A Returner's Magic Should Be Special",
  },
]

const MostViewed = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="home-swiper" id="most-viewed">
      <Head />
      <Loading loading={loading} type="gif">
        <div
          className="tab-content"
          data-name="day"
          style={{ display: 'block' }}
        >
          <Swiper
            modules={[EffectFade, Pagination]}
            speed={300}
            slidesPerView="auto"
            pagination={{
              progressbarFillClass: 'swiper-pagination-progressbar-fill',
              type: 'progressbar',
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Poster item={item} index={index + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Loading>
    </section>
  )
}

export default MostViewed
