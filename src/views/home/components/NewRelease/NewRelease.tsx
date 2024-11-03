import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Navigation } from 'swiper/modules'

import Head from './Head'

import { Poster } from '@/components/shared'

const data = [
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/4d/4d9a1479d337e3ff21e9cbeef1acc52f.jpg',
    title: 'Witch Enforcer',
    link: '/manga/majo-no-shikkou-hito.qn3qn',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/9/95/95d256f3dc63bc8d3351a9ba00ec312f.jpg',
    title: 'Magical Girl 201',
    link: '/manga/mahou-shoujo-201.2p34l',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/e/e6/e6e0a2ab2d857a884a6733a09382e178.jpg',
    title: "Hope You're Happy, Lemon",
    link: '/manga/kuso-onna-ni-sachi-are.6w317',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/0/06/063b2027dd1db7494f3e4ba8b2c9f725.jpg',
    title: 'Tsumiki Ogami & the Strange Everyday Life.',
    link: '/manga/ogami-tsumiki-to-kinichijou.1q39x',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/b/b5/b50334082b9a6b353dd32bb62ad18d27.jpg',
    title: 'Rugby Rumble',
    link: '/manga/saikyou-no-uta.ox875',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/39/3906aab24f4b41561e24c03b034cace8.jpg',
    title: 'The iDOLM@STER: Shiny Colors - Coherent Light',
    link: '/manga/the-idolm-at-ster-shiny-colors-coherent-light.pp2zq',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/0/01/0101bf544a9098fc4e36124534710adb.jpg',
    title:
      'Moto Kano-sensei wa, Choppiri Ecchi na Katei Houmon de Kimi to no Ai wo Haguku Mitai.',
    link: '/manga/moto-kano-sensei-wa-choppiri-ecchi-na-katei-houmon-de-kimi-to-no-ai-wo-haguku-mitai.59y30',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/57/57582d58ed44ca91751bfd43a7cd5374.jpg',
    title: 'Tune In to the Midnight Heart',
    link: '/manga/mayonaka-heart-tune.pp6pj',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/72/727e504c16fbd1b4e3465bd34b7ed7c1.jpg',
    title: 'Daddy and Buddy',
    link: '/manga/daddy-de-buddy.np24k',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f8/f810119c0f9d8acdb43257a2888036b9.jpg',
    title: 'Kagurabachi',
    link: '/manga/kagurabachi.v92q7',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/18/18888cfd45c9d4d91b7fd9621c17a4df.jpg',
    title: 'Kimi wo Wasureru Koi ga Shitai',
    link: '/manga/kimi-wo-wasureru-koi-ga-shitai.6w3pz',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/12/12b539cd2b21ceb2385080a5b398646d.jpg',
    title:
      'Majutsu Guild Sousui: Umarekawatte Imasara Yarinaosu Nidome no Gakuin Seikatsu',
    link: '/manga/majutsu-guild-sousui-umarekawatte-imasara-yarinaosu-nidome-no-gakuin-seikatsu.9072x',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/82/82177971fa673ec7a801f24c33969338.jpg',
    title: 'Misfortune at Work',
    link: '/manga/sangsabulsangsa.k343v',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/d6/d6e5b7e0c77671b133cffcb2a17445a6.jpg',
    title: 'Tsuruko Returns the Favor',
    link: '/manga/tsuruko-returns-the-favor.ox3lj',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/11/11af3798d04e5b064591b8301b5306f5.jpg',
    title:
      '"Issho ni Netain desu yo ne, Senpai?" to Amaku Sasayakarete Konya mo Nemurenai',
    link: '/manga/issho-ni-netain-desu-yo-ne-senpai-to-amaku-sasayakarete-konya-mo-nemurenai.lr623',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/47/479c06fb6868263e99cbb071b2a1130a.jpg',
    title: 'Baki Rahen',
    link: '/manga/baki-rahen.3p1p8',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/d2/d212c885bfb6790b0730532baef88bbe.jpg',
    title: 'Kyou mo Kitansu ka, Yoda-senpai.',
    link: '/manga/kyou-mo-kitansu-ka-yoda-senpai.3py98',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/6/6c/6c0e26201d49ae3780fd29aca8ab2617.jpg',
    title: 'Boruto: Two Blue Vortex',
    link: '/manga/boruto-two-blue-vortex.mvymp',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/2/26/26e0387b57b2f9ece4e4ddf3f5603c5c.jpg',
    title: 'Boruto: Two Blue Vortex (Fan Colored) (Colored)',
    link: '/manga/boruto-two-blue-vortex-fan-colored.0qo97',
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/c/c3/c30bf592a1b3b69294459ecbbc68fe36.jpg',
    title: 'Nikaidou Hell Golf',
    link: '/manga/nikaidou-jigoku-golf.0qx59',
  },
]

const NewRelease = () => {
  return (
    <section className="home-swiper">
      <Head />
      <Swiper
        modules={[EffectFade, Pagination, Navigation]}
        speed={300}
        slidesPerView="auto"
        pagination={{
          el: '.completed-pagination',
        }}
        navigation={{
          nextEl: '.complete-button-next-release',
          prevEl: '.complete-button-prev-release',
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Poster item={item} index={index + 1} />
          </SwiperSlide>
        ))}
        <div className="completed-pagination"></div>
      </Swiper>
    </section>
  )
}

export default NewRelease
