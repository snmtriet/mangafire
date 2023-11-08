import { useState } from 'react'
import classNames from 'classnames'
import { useAppSelector } from '@/store'
import { PAGE_ENUM } from '@/constants/page.constant'
import { useParams } from 'react-router-dom'

const data = [
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25fba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25cba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac259ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac256ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac35fba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac35dba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac35aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac25aba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac358ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac359ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac357ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac357ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    left: true,
  },
  {
    perPage: 1,
    image:
      'https://c2.mangacdn.net/12a3db61f9105800ed8c394685aeeb0bca6cf91409fba1bb554d72afa43cce802b4ad41f4a6524e9f62ac357ba11aadce18ec61e8a75d1ecd3eef06906/r/p.jpg',
    right: true,
  },
]

const Read = () => {
  const { slug, lang, chapter } = useParams()
  console.log({ slug, lang, chapter })
  const { pageType } = useAppSelector((state) => state.theme)
  const [pageIndex, setPageIndex] = useState(1)
  const fitType = {
    [PAGE_ENUM.PAGE_SINGLE]: 'fit-w',
    [PAGE_ENUM.PAGE_DOUBLE]: 'fit-w',
    [PAGE_ENUM.PAGE_LONG_STRIP]: 'fit-w',
  }

  return (
    <div className={classNames('pages', pageType)} dir="ltr">
      {pageType === PAGE_ENUM.PAGE_LONG_STRIP ? (
        <>
          {data.map((item, index) => (
            <div
              key={index}
              className={classNames('page', fitType[pageType])}
              style={{ marginBottom: '5px' }}
            >
              <div className="img loaded">
                <img
                  data-number={index + 1}
                  className={fitType[pageType]}
                  src={item.image}
                  alt={`Page ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div
          className={classNames('page', fitType[pageType])}
          style={{ marginBottom: '5px' }}
        >
          {data.map((item, index) => (
            <div key={index} className="img loaded">
              <img
                data-number={index + 1}
                className="fit-h"
                src={item.image}
                alt={`Page ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}

      <div className="number-nav ltr">
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
      </div>
    </div>
  )
}

export default Read
