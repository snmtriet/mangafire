import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Filter, Head } from './components'

import { Card } from '@/components/shared'
import { Pagination } from '@/components/ui'

const data = [
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/a/a4/a4a4d302895d66fa80ed63b671b08ce2.jpg',
    type: 'Manhwa',
    title: 'This is the Law',
    chapters: [
      {
        info: 'Chap 103 EN',
        date: '1 minute ago',
        lang: null,
      },
      {
        info: 'Chap 102 EN',
        date: 'Oct 31, 2023',
        lang: null,
      },
      {
        info: 'Chap 101 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/2/23/23df43d70b77bd23dcd47ded941f99a4.jpg',
    type: 'Manhwa',
    title: 'The Taming of the Tyrant',
    chapters: [
      {
        info: 'Chap 95 EN',
        date: '2 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 94 EN',
        date: 'Oct 25, 2023',
        lang: null,
      },
      {
        info: 'Chap 93 EN',
        date: 'Oct 25, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/3e/3e631d6d721e0cd51709da1fa9dd52f1.jpg',
    type: 'Manhwa',
    title: 'Michin Wangnyeo Renia',
    chapters: [
      {
        info: 'Chap 56 EN',
        date: '8 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 55 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
      {
        info: 'Chap 54 EN',
        date: 'Oct 23, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/a/ac/ac707cc86f6cc51d70d804af0fd7d4c0.jpg',
    type: 'Manhua',
    title: 'ShaZi',
    chapters: [
      {
        info: 'Chap 115 EN',
        date: '10 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 114 EN',
        date: 'Nov 04, 2023',
        lang: null,
      },
      {
        info: 'Chap 113 EN',
        date: 'Oct 09, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/2/27/27e3087bb9dc47aa9f29f84c2ffe8a99.jpg',
    type: 'Manhwa',
    title: "The Twins' New Life",
    chapters: [
      {
        info: 'Chap 149 EN',
        date: '11 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 148 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 147 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/c/c4/c40b2d3aabe0818b65a10cfe6f3d228a.jpg',
    type: 'Manhwa',
    title: 'The Villainess Has Shrunk!',
    chapters: [
      {
        info: 'Chap 89 EN',
        date: '14 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 88 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
      {
        info: 'Chap 87 EN',
        date: 'Oct 19, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/12/12eebc25f996e7bdfd65e688d8b135cf.jpg',
    type: 'Manhua',
    title: 'I Become A Villain In My Novel (Colored)',
    chapters: [
      {
        info: 'Chap 377 EN',
        date: '14 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 376 EN',
        date: 'Nov 03, 2023',
        lang: null,
      },
      {
        info: 'Chap 375 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/6/6d/6dfe68a3ebbe3eb2296bc24b1b6df322.jpg',
    type: 'Manga',
    title: 'That Girl Is Cute... But Dangerous?',
    chapters: [
      {
        info: 'Chap 55 EN',
        date: '16 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 54 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
      {
        info: 'Chap 53 EN',
        date: 'Sep 27, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/0/07/07640781f1e1a31d17bd7c0a46072b17.jpg',
    type: 'Manhwa',
    title: 'The Novelist and His Neighbor',
    chapters: [
      {
        info: 'Chap 65 EN',
        date: '17 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 64 EN',
        date: 'Oct 31, 2023',
        lang: null,
      },
      {
        info: 'Chap 63 EN',
        date: 'Oct 17, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/80/80ddc3dea99f5dbe33edec302f056d17.jpg',
    type: 'Manhwa',
    title: 'Barbarian Quest',
    chapters: [
      {
        info: 'Chap 82 EN',
        date: '21 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 81 EN',
        date: '21 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 80 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/b/b9/b90db30a6ff5430dcfbbbaad75ec3dde.jpg',
    type: 'Manhwa',
    title: "I'm Deleting Them From My Life",
    chapters: [
      {
        info: 'Chap 82 EN',
        date: '29 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 81 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 80 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/41/413e6cb0d8fbecd2230827301bf098fc.jpg',
    type: 'Manhwa',
    title: 'Tyrant of the Tower Defense Game',
    chapters: [
      {
        info: 'Chap 68 EN',
        date: '32 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 67 EN',
        date: 'Nov 02, 2023',
        lang: null,
      },
      {
        info: 'Chap 66 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f3/f32641d313a31bb0be88575fee300fc5.jpg',
    type: 'Manhwa',
    title: 'I Stan the Prince',
    chapters: [
      {
        info: 'Chap 71 EN',
        date: '34 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 70 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
      {
        info: 'Chap 69 EN',
        date: 'Oct 24, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/39/3996a8b5436d1032e5871403fb9b1b47.jpg',
    type: 'Manhua',
    title: 'Beauty BIoggers in Another WorId',
    chapters: [
      {
        info: 'Chap 92 EN',
        date: '34 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 91 EN',
        date: '34 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 90 EN',
        date: '34 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/1d/1da225eff5da1a1a9307863b49a6fc54.jpg',
    type: 'Manhwa',
    title: 'Preventing the Making of a Tyrant',
    chapters: [
      {
        info: 'Chap 89 EN',
        date: '35 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 88 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
      {
        info: 'Chap 87 EN',
        date: 'Oct 19, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/4b/4b99916c3b476cad118bcdfbff2f68ef.jpg',
    type: 'Manhwa',
    title: 'Villain to Kill',
    chapters: [
      {
        info: 'Chap 121 EN',
        date: '38 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 120 EN',
        date: 'Oct 20, 2023',
        lang: null,
      },
      {
        info: 'Chap 119 EN',
        date: 'Oct 12, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/0/07/0740d9b38243d47669c2318c0eca5c82.jpg',
    type: 'Manhwa',
    title: 'Your Throne',
    chapters: [
      {
        info: 'Chap 172 EN',
        date: '41 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 171 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 170 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/c/c2/c2d17eecd8eb90d6fae9516ec666197e.jpg',
    type: 'Manga',
    title: "Cecil's Queen",
    chapters: [
      {
        info: 'Chap 40 JA',
        date: '41 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 39 JA',
        date: '41 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 38 JA',
        date: '41 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/d1/d196de249bbce5e2e38709937e266269.jpg',
    type: 'Manhua',
    title: "Sammy's Children's Day",
    chapters: [
      {
        info: 'Chap 3 EN',
        date: '43 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 2 EN',
        date: '43 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 1 EN',
        date: '44 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/51/517b91667cd4a290c9d2640ee1d2c8e9.jpg',
    type: 'Manhwa',
    title: "Villain Duke's Precious One",
    chapters: [
      {
        info: 'Chap 113 EN',
        date: '44 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 112 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
      {
        info: 'Chap 111 EN',
        date: 'Oct 19, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/7f/7f6b0663ad3c2d396766b7c279e79f52.jpg',
    type: 'Manhwa',
    title: 'Boksu Law Firm',
    chapters: [
      {
        info: 'Chap 1 EN',
        date: '47 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/6/63/63464f44acd1bd5ff433458157554802.jpg',
    type: 'Manhua',
    title: "Be A Eunuch's Wife To Control The World (Colored)",
    chapters: [
      {
        info: 'Chap 335 EN',
        date: '52 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 334 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 333 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/2/2e/2e0a4f13e30d7b2dcfb996dc36b0c4e8.jpg',
    type: 'Manhwa',
    title: 'The Red Knight Seeks No Reward',
    chapters: [
      {
        info: 'Chap 104 EN',
        date: '52 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 103 EN',
        date: 'Oct 26, 2023',
        lang: null,
      },
      {
        info: 'Chap 102 EN',
        date: 'Oct 22, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/6/60/6084ded31691dc855cda49df00a76623.jpg',
    type: 'Manhwa',
    title: 'The World is Money and Power',
    chapters: [
      {
        info: 'Chap 136 EN',
        date: '55 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 135 EN',
        date: 'Oct 29, 2023',
        lang: null,
      },
      {
        info: 'Chap 134 EN',
        date: 'Oct 22, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/49/4903c1934fee150258b985f9048d87bb.jpg',
    type: 'Manhua',
    title: 'Shenwu Tianzun (Colored)',
    chapters: [
      {
        info: 'Chap 521 EN',
        date: '55 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 520 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
      {
        info: 'Chap 519 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/4d/4dc8f2d4b89bfc24d281470a60a00dc2.jpg',
    type: 'Manhwa',
    title: 'The Tutorial Is Too Tough!',
    chapters: [
      {
        info: 'Chap 137 EN',
        date: '56 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 136 EN',
        date: 'Oct 24, 2023',
        lang: null,
      },
      {
        info: 'Chap 135 EN',
        date: 'Oct 18, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/3e/3e2e597bee1034909fc6399f011d31af.jpg',
    type: 'Manhua',
    title:
      'My Female Disciples are all Future Masters of the Heavens (Colored)',
    chapters: [
      {
        info: 'Chap 239 EN',
        date: '59 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 238 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
      {
        info: 'Chap 237 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/c/c0/c0bc9858ecffdd6eb2b2b8fc36e2957c.jpg',
    type: 'Manga',
    title: 'Again!!',
    chapters: [
      {
        info: 'Chap 136 JA',
        date: '59 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 136 EN',
        date: 'Sep 12, 2023',
        lang: null,
      },
      {
        info: 'Chap 135 JA',
        date: '59 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/0/0f/0f703dd8002761a13251dda5a0187d2c.jpg',
    type: 'Manhua',
    title: 'Beauty and the Beasts (Colored)',
    chapters: [
      {
        info: 'Chap 501 EN',
        date: '59 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 500 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
      {
        info: 'Chap 499 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/fb/fb5c19baee61a0ae69ea57937e7404d1.jpg',
    type: 'Manga',
    title: "Yamakusa Yuu Today's Doodle",
    chapters: [
      {
        info: 'Chap 164 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 163 EN',
        date: '19 hours ago',
        lang: null,
      },
      {
        info: 'Chap 162 EN',
        date: 'Nov 03, 2023',
        lang: null,
      },
    ],
  },
]

const FilterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
  })
  const page = searchParams.get('page') || 1
  const keyword = searchParams.get('keyword')
  const type = searchParams.get('type')
  const genre = searchParams.get('genre')
  const status = searchParams.get('status')
  const year = searchParams.get('year')
  const language = searchParams.get('language')
  const length = searchParams.get('length')
  // console.log({ keyword, type, genre, status, year, language, length })

  useEffect(() => {
    document.title = 'Filter - MangaFire'
  }, [])

  const handleChangePage = (page: number) => {
    setSearchParams(
      (prev) => {
        prev.set('page', page.toString())
        return prev
      },
      { replace: true }
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const keyword = formData.get('keyword') || ''
    const type = formData.getAll('type[]') || ''
    const genre = formData.getAll('genre[]') || ''
    const status = formData.getAll('status[]') || ''
    const year = formData.getAll('year[]') || ''
    const language = formData.getAll('language[]') || ''
    const length = formData.get('length') || ''
    const sort = formData.get('sort') || ''
    setSearchParams(
      (prev) => {
        prev.set('page', page.toString())
        keyword && prev.set('keyword', keyword.toString())
        type && prev.set('type', type.join(',').toString())
        genre && prev.set('genre', genre.join(',').toString())
        status && prev.set('status', status.join(',').toString())
        year && prev.set('year', year.join(',').toString())
        language && prev.set('language', language.join(',').toString())
        length && prev.set('length', length.toString())
        sort && prev.set('sort', sort?.toString())
        return prev
      },
      { replace: true }
    )
  }

  return (
    <div className="container">
      <section className="mt-5">
        <Head />
        <Filter handleSubmit={handleSubmit} />
        <div className="original card-lg">
          {data.map((item, index) => (
            <Card key={item.image} item={item} index={index + 1} />
          ))}
        </div>
        <Pagination total={1000} onChange={handleChangePage} />
      </section>
    </div>
  )
}

export default FilterPage
