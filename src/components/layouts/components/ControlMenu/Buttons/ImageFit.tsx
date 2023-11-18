import { FitType } from '@/@types/theme'
import { FIT_ENUM } from '@/constants/fit.constant'
import { setFitType, useAppSelector } from '@/store'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

const ImageFit = () => {
  const { fitType } = useAppSelector((state) => state.theme)
  const dispatch = useDispatch()

  const handleChangeFitType = (type: FitType) => {
    dispatch(setFitType(type))
  }

  return (
    <div
      className="btn-options mb-2"
      data-name="image_fit"
      data-show-if="this.image_fit != 'disabled'"
    >
      <div
        data-value="width"
        className={classNames(
          fitType === FIT_ENUM.FIT_WIDTH ? 'd-block' : 'd-none'
        )}
      >
        <button
          className="justify-content-between"
          onClick={() => handleChangeFitType(FIT_ENUM.FIT_HEIGHT)}
        >
          <span>Fit Width</span>
          <i className="fa-light fa-arrows-left-right fa-lg"></i>
        </button>
      </div>
      <div
        data-value="height"
        className={classNames(
          fitType === FIT_ENUM.FIT_HEIGHT ? 'd-block' : 'd-none'
        )}
      >
        <button
          className="justify-content-between"
          onClick={() => handleChangeFitType(FIT_ENUM.FIT_BOTH)}
        >
          <span>Fit Height</span>
          <i className="fa-light fa-arrows-up-down fa-lg"></i>
        </button>
      </div>
      <div
        data-value="both"
        className={classNames(
          fitType === FIT_ENUM.FIT_BOTH ? 'd-block' : 'd-none'
        )}
      >
        <button
          className="justify-content-between"
          onClick={() => handleChangeFitType(FIT_ENUM.FIT_NO_LIMIT)}
        >
          <span>Fit Both</span>
          <i className="fa-light fa-arrows-up-down-left-right fa-lg"></i>
        </button>
      </div>
      <div
        data-value="none"
        className={classNames(
          fitType === FIT_ENUM.FIT_NO_LIMIT ? 'd-block' : 'd-none'
        )}
      >
        <button
          className="justify-content-between"
          onClick={() => handleChangeFitType(FIT_ENUM.FIT_WIDTH)}
        >
          <span>No Limit</span>
          <i className="fa-light fa-ban fa-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default ImageFit
