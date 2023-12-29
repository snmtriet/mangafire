import classNames from 'classnames'
import {
  setActiveSwiper,
  setPageIndex,
  useAppDispatch,
  useAppSelector,
} from '@/store'
import scrollToPage from '@/utils/scrollToPage'

const ProgressBar = () => {
  const { progressPosition, pageIndex } = useAppSelector((state) => state.theme)

  const dispatch = useAppDispatch()

  const handleChangePage = (page: number) => {
    dispatch(setPageIndex(page))
    dispatch(setActiveSwiper(page))
    scrollToPage(page)
  }

  return (
    <div id="progress-bar" className={classNames('d-flex', progressPosition)}>
      <div>
        <p>1</p>
        <ul>
          {new Array(56).fill(undefined).map((item, index) => {
            return (
              <li
                key={index}
                data-page={index + 1}
                data-name={index + 1}
                className={classNames(pageIndex === index + 1 && 'active')}
                onClick={() => handleChangePage(index + 1)}
              >
                <div>{index + 1}</div>
              </li>
            )
          })}
        </ul>
        <p className="total-page">56</p>
      </div>
    </div>
  )
}

export default ProgressBar
