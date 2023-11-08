import classNames from 'classnames'
import { ProgressOffsetType } from '@/@types/theme'
import { PROGRESS_OFFSET_ENUM } from '@/constants/progress.constant'
import { setProgressOffset, useAppDispatch, useAppSelector } from '@/store'

const Progress = () => {
  const dispatch = useAppDispatch()
  const { progressOffset } = useAppSelector((state) => state.theme)

  const handleChangeProgressOffset = (type: ProgressOffsetType) => {
    console.log(type)
    dispatch(setProgressOffset(type))
  }

  return (
    <div className="btn-options mb-2" data-name="progress_position">
      <div
        data-value="top"
        className={classNames(
          'd-none',
          progressOffset === PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_TOP &&
            'd-block'
        )}
        onClick={() =>
          handleChangeProgressOffset(
            PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_BOTTOM
          )
        }
      >
        <button className="justify-content-between">
          <span>Top Progress</span>
          <i className="fa-light fa-arrow-down-from-line fa-lg"></i>
        </button>
      </div>
      <div
        data-value="bottom"
        className={classNames(
          'd-none',
          progressOffset === PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_BOTTOM &&
            'd-block'
        )}
        onClick={() =>
          handleChangeProgressOffset(PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_LEFT)
        }
      >
        <button className="justify-content-between">
          <span>Bottom Progress</span>
          <i className="fa-light fa-arrow-up-from-line fa-lg"></i>
        </button>
      </div>
      <div
        data-value="left"
        className={classNames(
          'd-none',
          progressOffset === PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_LEFT &&
            'd-block'
        )}
        onClick={() =>
          handleChangeProgressOffset(PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_RIGHT)
        }
      >
        <button className="justify-content-between">
          <span>Left Progress</span>
          <i className="fa-light fa-arrow-right-from-line fa-lg"></i>
        </button>
      </div>
      <div
        data-value="right"
        className={classNames(
          'd-none',
          progressOffset === PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_RIGHT &&
            'd-block'
        )}
        onClick={() =>
          handleChangeProgressOffset(PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_NONE)
        }
      >
        <button className="justify-content-between">
          <span>Right Progress</span>
          <i className="fa-light fa-arrow-left-from-line fa-lg"></i>
        </button>
      </div>
      <div
        data-value="none"
        className={classNames(
          'd-none',
          progressOffset === PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_NONE &&
            'd-block'
        )}
        onClick={() =>
          handleChangeProgressOffset(PROGRESS_OFFSET_ENUM.PROGRESS_OFFSET_TOP)
        }
      >
        <button className="justify-content-between">
          <span>No Progress</span>
          <i className="fa-light fa-dash fa-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default Progress
