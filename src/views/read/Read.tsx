import classNames from 'classnames'
import { setPageIndex, useAppDispatch, useAppSelector } from '@/store'
import { PAGE_ENUM } from '@/constants/page.constant'
import { useParams } from 'react-router-dom'
import Image from './components/Image'
import { FIT_ENUM } from '@/constants/fit.constant'
import LongStripImage from './components/LongStripImage'

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

  console.log({ slug, lang, chapter })

  const handleChangePage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!['singlepage', 'doublepage'].includes(pageType)) return
    const clickX =
      e.clientX - (e.target as HTMLDivElement).getBoundingClientRect().left
    const divWidth = (e.target as HTMLDivElement).offsetWidth
    const leftPercentage = (clickX / divWidth) * 100
    const rightPercentage = 100 - leftPercentage
    const isLeft = data[pageIndex]?.left
    if (leftPercentage <= 30) {
      if (pageIndex > 1) {
        if (pageType === 'doublepage') {
          dispatch(setPageIndex(pageIndex - (!isLeft ? 1 : 2)))
        } else {
          dispatch(setPageIndex(pageIndex - 1))
        }
      }
    }
    if (rightPercentage <= 30) {
      if (pageIndex < 56 && pageIndex >= 1) {
        if (pageType === 'doublepage') {
          dispatch(setPageIndex(pageIndex + (!isLeft ? 1 : 2)))
        } else {
          dispatch(setPageIndex(pageIndex + 1))
        }
      }
    }
  }

  return (
    <div
      className={classNames('pages', pageType)}
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
        <div className={classNames('page', fitClassName[fitType])}>
          {new Array(56).fill(undefined).map((item, index) => (
            <Image
              key={index}
              src={`/temp/0${
                index + 1 >= 10 ? index + 1 : `0${index + 1}`
              }.jpg`}
              number={index + 1}
              wrapperClassName={classNames(
                pageIndex + 4 > index + 1 && 'loaded',
                pageIndex === index + 1 ? 'd-block' : 'd-none'
              )}
              imageClassName={fitClassName[fitType]}
            />
          ))}
        </div>
      )}

      {pageType === PAGE_ENUM.PAGE_DOUBLE && (
        <div className={classNames('page', fitClassName[fitType])}>
          {new Array(56).fill(undefined).map((item, index) => (
            <Image
              key={index}
              src={`/temp/0${
                index + 1 >= 10 ? index + 1 : `0${index + 1}`
              }.jpg`}
              number={index + 1}
              wrapperClassName={classNames(
                pageIndex + 4 > index + 1 && 'loaded',
                item?.left && 'left',
                item?.right && 'right',
                item?.left || item?.right
                  ? index + 1 === pageIndex || index + 2 === pageIndex
                    ? 'd-block'
                    : 'd-none'
                  : index + 1 === pageIndex
                  ? 'd-block'
                  : 'd-none'
              )}
              imageClassName={fitClassName[fitType]}
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
