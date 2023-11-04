import { Card } from '@/components/shared'
import { Filter, Head } from './components'

const data = [
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/83/8397aaa168a777015793874efd6bdf49.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 113 ES-LA',
        date: '13 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 113 EN',
        date: '23 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 112 ES-LA',
        date: 'Oct 28, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/a/a8/a8db3745fa2487c527083bb2b8de0e53.jpg',
    type: 'Manhwa',
    title: '  ',
    chapters: [
      {
        info: 'Chap 88 EN',
        date: '13 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 88 PT-BR',
        date: 'Oct 19, 2023',
        lang: null,
      },
      {
        info: 'Chap 87 EN',
        date: 'Oct 26, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/49/49d17c6611b9996de7b360d1dabe2954.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 58 EN',
        date: '22 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 57 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 56 EN',
        date: 'Oct 14, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/48/488171fb440fef571e233cb825e2708e.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 33 EN',
        date: '22 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 32 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 31 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f0/f08a418d9fde7023a6a8f1f1de22f18e.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 8.5 EN',
        date: '23 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 8 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
      {
        info: 'Chap 7 EN',
        date: 'Oct 07, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/e/e6/e6e0a2ab2d857a884a6733a09382e178.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 4 EN',
        date: '23 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 3 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 3 ES-LA',
        date: '2 minutes ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/de/de177f24f6560a4d18443341879e82e9.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 120 EN',
        date: '33 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 119 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 118 EN',
        date: '1 hour ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/4a/4a574c21686cecf5c7a762fc9e7fa482.jpg',
    type: 'Manhua',
    title: '  ',
    chapters: [
      {
        info: 'Chap 243 EN',
        date: '52 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 242 EN',
        date: 'Oct 31, 2023',
        lang: null,
      },
      {
        info: 'Chap 241 EN',
        date: 'Oct 27, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/4c/4cf8a82ed92a43d24ff0f16ecf5f95a8.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 24 PT-BR',
        date: '53 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 23 PT-BR',
        date: 'Nov 01, 2023',
        lang: null,
      },
      {
        info: 'Chap 22 ES-LA',
        date: 'Nov 01, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/e/e5/e5c6d7101c5053b76bf58e75e13aef28.jpg',
    type: 'Doujinshi',
    title: '  ',
    chapters: [
      {
        info: 'Chap 63 EN',
        date: '53 minutes ago',
        lang: null,
      },
      {
        info: 'Chap 62 EN',
        date: 'Oct 25, 2023',
        lang: null,
      },
      {
        info: 'Chap 61 EN',
        date: 'Oct 18, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/c/c4/c4877b837126b5533cb0da62503b2798.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 3 EN',
        date: '1 hour ago',
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
      'https://static.bunnycdn.ru/i/cache/images/e/ed/ed39023f5e67f7f86bb878663757f911.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 30 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 29 EN',
        date: 'Jun 11, 2023',
        lang: null,
      },
      {
        info: 'Chap 28 EN',
        date: 'Jan 19, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/7e/7e48bf19e38ef7fd664ca82e9678c36a.jpg',
    type: 'Manhua',
    title: '  ',
    chapters: [
      {
        info: 'Chap 10 EN',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 9 EN',
        date: 'Oct 28, 2023',
        lang: null,
      },
      {
        info: 'Chap 8.5 EN',
        date: 'Oct 03, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/43/437cf748bb3e466aa9c662998b4176c4.jpg',
    type: 'One_shot',
    title: '  ',
    chapters: [
      {
        info: 'Chap 0 EN',
        date: '1 hour ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/b/b0/b0a5cd75d80a361bca98568cbd6f67b9.jpg',
    type: 'Manhua',
    title: '  ',
    chapters: [
      {
        info: 'Chap 33 PT-BR',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 33 EN',
        date: '1 hour ago',
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
    title: '  ',
    chapters: [
      {
        info: 'Chap 13 EN',
        date: '1 hour ago',
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
      'https://static.bunnycdn.ru/i/cache/images/1/12/12655ff3cbb728f6573457c35dc1339f.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 12 PT',
        date: '1 hour ago',
        lang: null,
      },
      {
        info: 'Chap 12 EN',
        date: 'Dec 19, 2022',
        lang: null,
      },
      {
        info: 'Chap 11 PT',
        date: '1 hour ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/70/70afdb05a5d0bf917e839b81f4495127.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 23 ES-LA',
        date: '1 hour ago',
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
    title: '  ',
    chapters: [
      {
        info: 'Chap 34 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 33.2 EN',
        date: '3 hours ago',
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
      'https://static.bunnycdn.ru/i/cache/images/4/43/43c3d07e8a0712e4d33072f8b6d32d47.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 87 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 86 EN',
        date: 'Oct 24, 2023',
        lang: null,
      },
      {
        info: 'Chap 85 EN',
        date: 'Oct 12, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/7/79/7990e098983eaf51504fd8055561f0ad.jpg',
    type: 'Manhwa',
    title: '  ',
    chapters: [
      {
        info: 'Chap 5 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 4 EN',
        date: '2 hours ago',
        lang: null,
      },
      {
        info: 'Chap 3 EN',
        date: '2 hours ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/a/a7/a7d795a3f7c65e5e05f8454795ed2643.jpg',
    type: 'Manhwa',
    title: '  ',
    chapters: [
      {
        info: 'Chap 259 EN',
        date: '3 hours ago',
        lang: null,
      },
      {
        info: 'Chap 258 EN',
        date: 'Oct 29, 2023',
        lang: null,
      },
      {
        info: 'Chap 257 EN',
        date: 'Oct 24, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/1b/1b61bf34a83be6960206ed3fa6784965.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 37 EN',
        date: '3 hours ago',
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
    title: '  ',
    chapters: [
      {
        info: 'Chap 10 EN',
        date: '3 hours ago',
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
    title: '  ',
    chapters: [
      {
        info: 'Chap 301 EN',
        date: '3 hours ago',
        lang: null,
      },
      {
        info: 'Chap 300 EN',
        date: '6 hours ago',
        lang: null,
      },
      {
        info: 'Chap 299 EN',
        date: '18 hours ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/2/22/22a04acac6ea6384ee123a0c1f725fe9.jpg',
    type: 'Manhua',
    title: '  ',
    chapters: [
      {
        info: 'Chap 10 EN',
        date: '4 hours ago',
        lang: null,
      },
      {
        info: 'Chap 9 EN',
        date: 'Nov 03, 2023',
        lang: null,
      },
      {
        info: 'Chap 8 EN',
        date: 'Oct 21, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/0/09/092023d31763c6a5f249e08167ff6bc3.jpg',
    type: 'Manhwa',
    title: '  ',
    chapters: [
      {
        info: 'Chap 115 EN',
        date: '4 hours ago',
        lang: null,
      },
      {
        info: 'Chap 114 EN',
        date: 'Jan 05, 2023',
        lang: null,
      },
      {
        info: 'Chap 113 EN',
        date: 'Jan 05, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/e/ed/ed97e8855c9d80cd54c1ce1c1af25538.jpg',
    type: 'Manhua',
    title: '  ',
    chapters: [
      {
        info: 'Chap 593 EN',
        date: '4 hours ago',
        lang: null,
      },
      {
        info: 'Chap 592 EN',
        date: 'Oct 10, 2023',
        lang: null,
      },
      {
        info: 'Chap 591 EN',
        date: 'Sep 18, 2023',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/9/90/90bce26a2f0d7fb7e70a874f6d332f64.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 1 EN',
        date: '4 hours ago',
        lang: null,
      },
    ],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/4/48/484577083674ec6675e4059f78c2052c.jpg',
    type: 'Manga',
    title: '  ',
    chapters: [
      {
        info: 'Chap 40.3 EN',
        date: '4 hours ago',
        lang: null,
      },
      {
        info: 'Chap 40.2 EN',
        date: '4 hours ago',
        lang: null,
      },
      {
        info: 'Chap 40.1 EN',
        date: '4 hours ago',
        lang: null,
      },
    ],
  },
]

const FilterForm = () => {
  return (
    <div className="container">
      <section className="mt-5">
        <Head />
        <Filter />
        <div className="original card-lg">
          {data.map((item) => (
            <Card key={item.image} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default FilterForm
