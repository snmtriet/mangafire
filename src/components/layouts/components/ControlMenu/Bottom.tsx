import { setShowHeader, useAppDispatch, useAppSelector } from '@/store'
import { Direction, ImageFit, PageType, Progress } from './Buttons'

const Bottom = () => {
  const dispatch = useAppDispatch()
  const { isShowHeader } = useAppSelector((state) => state.theme)

  const onToggleHeader = () => {
    dispatch(setShowHeader(!isShowHeader))
  }

  return (
    <>
      <div className="btn-options mb-2 tooltipz">
        <div data-value="sticky" className="d-block">
          <button className="justify-content-between" onClick={onToggleHeader}>
            <span>{isShowHeader ? 'Header Sticky' : 'Header Hidden'}</span>
            {isShowHeader ? (
              <i className="fa-light fa-window-maximize fa-lg"></i>
            ) : (
              <i className="fa-light fa-square fa-lg"></i>
            )}
          </button>
        </div>
      </div>
      <PageType />
      <ImageFit />
      <Direction />
      <Progress />
      <button
        className="jb-btn"
        data-toggle="modal"
        data-target=".advanced-settings"
      >
        <span>Advanced Settings</span>
        <i className="fa-light fa-sliders fa-lg"></i>
      </button>
    </>
  )
}

export default Bottom
