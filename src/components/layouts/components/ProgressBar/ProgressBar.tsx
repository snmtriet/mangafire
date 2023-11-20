import classNames from 'classnames'
import {
  setActiveSwiper,
  setPageIndex,
  useAppDispatch,
  useAppSelector,
} from '@/store'

const ProgressBar = () => {
  const { progressOffset, pageIndex } = useAppSelector((state) => state.theme)

  const dispatch = useAppDispatch()

  return (
    <div id="progress-bar" className={classNames('d-flex', progressOffset)}>
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
                onClick={() => {
                  dispatch(setPageIndex(index + 1))
                  dispatch(setActiveSwiper(index + 1))
                }}
              >
                <div>{index + 1}</div>
              </li>
            )
          })}
          {/* <li data-page="1" data-name="1">
            <div>1</div>
          </li>
          <li data-page="2" data-name="2">
            <div>2</div>
          </li>
          <li data-page="3" data-name="3-4">
            <div>3-4</div>
          </li>
          <li data-page="5" data-name="5-6">
            <div>5-6</div>
          </li>
          <li data-page="7" data-name="7-8">
            <div>7-8</div>
          </li>
          <li data-page="9" data-name="9-10" className="active">
            <div>9-10</div>
          </li>
          <li data-page="11" data-name="11-12">
            <div>11-12</div>
          </li>
          <li data-page="13" data-name="13-14">
            <div>13-14</div>
          </li>
          <li data-page="15" data-name="15-16">
            <div>15-16</div>
          </li>
          <li data-page="17" data-name="17-18">
            <div>17-18</div>
          </li> */}
          {/* <li data-page="19" data-name="19-20">
            <div>19-20</div>
          </li> */}
        </ul>
        <p className="total-page">56</p>
      </div>
    </div>
  )
}

export default ProgressBar
