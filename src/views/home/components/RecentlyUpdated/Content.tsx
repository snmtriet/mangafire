import { useState, useEffect } from 'react'

import { Card, Loading } from '@/components/shared'

const fakeData = [
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/c/c4/c4877b837126b5533cb0da62503b2798.jpg',
    type: 'Manga',
    title: 'Choudokyuu Cheat Akuyaku Reijou no Karei naru Fukushuutan',
    chapters: [
      {
        info: 'Chap 3 EN',
        date: '11 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 2.3 EN',
        date: 'Aug 27, 2023',
        lang: null,
      },
      {
        info: 'Chap 2.2 EN',
        date: 'Sep 05, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/de/de177f24f6560a4d18443341879e82e9.jpg',
    type: 'Manga',
    title: "Darwin's Game",
    chapters: [
      {
        info: 'Chap 119 EN',
        date: '11 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 118 EN',
        date: '11 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 117 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/43/437cf748bb3e466aa9c662998b4176c4.jpg',
    type: 'One_shot',
    title: 'Warming Up My Wife In A Unique Way.',
    chapters: [
      {
        info: 'Chap 0 EN',
        date: '17 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/b/b0/b0a5cd75d80a361bca98568cbd6f67b9.jpg',
    type: 'Manhua',
    title: 'Catastrophic Necromancer (Colored)',
    chapters: [
      {
        info: 'Chap 33 PT-BR',
        date: '20 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 33 EN',
        date: '20 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 32 EN',
        date: 'Oct 29, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/74/74302a654343af28c892ae71c1899b70.jpg',
    type: 'Manga',
    title: 'Gyaru to Nekura no Kyuuketsu Kankei',
    chapters: [
      {
        info: 'Chap 13 EN',
        date: '21 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 12 EN',
        date: 'Oct 29, 2023',
        lang: null,
      },
      {
        info: 'Chap 11 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/70/70afdb05a5d0bf917e839b81f4495127.jpg',
    type: 'Manga',
    title: 'Jigoku ni Ochite yo, Onii-chan',
    chapters: [
      {
        info: 'Chap 23 ES-LA',
        date: '31 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 22 ES-LA',
        date: 'Oct 21, 2023',
        lang: null,
      },
      {
        info: 'Chap 21 ES-LA',
        date: 'Oct 07, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/9/96/96f8d52e971987506147130ef8d8665e.jpg',
    type: 'Manga',
    title: 'Possibly the Greatest Alchemist of All Time',
    chapters: [
      {
        info: 'Chap 34 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 33.2 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 33.1 EN',
        date: 'Oct 29, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/79/7990e098983eaf51504fd8055561f0ad.jpg',
    type: 'Manhwa',
    title: 'Delivery Man From Murim',
    chapters: [
      {
        info: 'Chap 5 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 4 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 3 EN',
        date: '1 hour ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/1b/1b61bf34a83be6960206ed3fa6784965.jpg',
    type: 'Manga',
    title: 'Winning Pass',
    chapters: [
      {
        info: 'Chap 37 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 36 EN',
        date: 'Nov 01, 2023',
        lang: null,
      },
      {
        info: 'Chap 35 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/8f/8f3105cfddcd068713daf68f22fbf906.jpg',
    type: 'Manga',
    title: 'Alicia Y',
    chapters: [
      {
        info: 'Chap 10 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 9 EN',
        date: 'Nov 02, 2023',
        lang: null,
      },
      {
        info: 'Chap 8 EN',
        date: 'Oct 30, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/b/b4/b4122a93ac6c3efbc4aeed47226a2c60.jpg',
    type: 'Manhua',
    title: 'Invincible After a Hundred Years of Seclusion',
    chapters: [
      {
        info: 'Chap 301 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 300 EN',
        date: '5 hours ago',
        lang: null,
      },
      {
        info: 'Chap 299 EN',
        date: '17 hours ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/2/22/22a04acac6ea6384ee123a0c1f725fe9.jpg',
    type: 'Manhua',
    title: 'The Priest Dreaming of a Dragon',
    chapters: [
      {
        info: 'Chap 10 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 9 EN',
        date: '23 hours ago',
        lang: null,
      },
      {
        info: 'Chap 8 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
]
export type Item = (typeof fakeData)[0]

const Content = () => {
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
    <Loading loading={loading} type="gif">
      <div className="tab-content" data-name="all">
        <div className="original card-lg">
          {fakeData &&
            fakeData.length > 0 &&
            fakeData.map((item: Item, index) => (
              <Card key={index} item={item} index={index + 1} />
            ))}
        </div>
      </div>
    </Loading>
  )
}

export default Content
