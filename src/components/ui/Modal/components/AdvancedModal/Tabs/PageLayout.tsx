import classNames from 'classnames'
import { PageType, ProgressOffsetType } from '@/@types/theme'
import { PAGE_ENUM } from '@/constants/page.constant'
import { PROGRESS_OFFSET_ENUM } from '@/constants/progress.constant'
import {
  setIsSwiping,
  setPageType,
  setProgressPosition,
  useAppDispatch,
  useAppSelector,
} from '@/store'

const PageLayout = () => {
  const dispatch = useAppDispatch()
  const { pageType, progressPosition, isSwiping } = useAppSelector(
    (state) => state.theme
  )

  const handleChangePageType = (type: PageType) => {
    dispatch(setPageType(type))
  }

  const handleChangeProgressPosition = (type: ProgressOffsetType) => {
    dispatch(setProgressPosition(type))
  }

  const onToggleSwiping = () => {
    dispatch(setIsSwiping(!isSwiping))
  }

  return (
    <div className="tab-content" data-name="page-layout">
      <div data-show-if="this.display_style != 'disabled'">
        <div className="mb-2">Page Display Style</div>
        <div
          className="setting-tab page-layout btn-options"
          data-name="display_style"
        >
          <div
            data-value="singlepage"
            className={classNames(pageType === PAGE_ENUM.SINGLE && 'active')}
            onClick={() => handleChangePageType(PAGE_ENUM.SINGLE)}
          >
            <i className="fa-light fa-page" /> <span>Single Page</span>
          </div>
          <div
            data-value="doublepage"
            className={classNames(pageType === PAGE_ENUM.DOUBLE && 'active')}
            onClick={() => handleChangePageType(PAGE_ENUM.DOUBLE)}
          >
            <i className="fa-light fa-book-open" />
            <span>Double Page</span>
          </div>
          <div
            data-value="longstrip"
            className={classNames(
              pageType === PAGE_ENUM.LONG_STRIP && 'active'
            )}
            onClick={() => handleChangePageType(PAGE_ENUM.LONG_STRIP)}
          >
            <svg>
              <use xlinkHref="#icon-longstrip" />
            </svg>
            <span>Long Strip</span>
          </div>
        </div>

        {pageType === PAGE_ENUM.LONG_STRIP && (
          <div>
            <div className="form-group strip-margin">
              <label htmlFor="text">Strip Margin</label>
              <input
                type="number"
                className="form-control mx-2"
                placeholder="0"
                min={0}
                max={30}
                name="strip_margin_value"
              />
              <button className="btn btn-secondary1 reset-strip-margin">
                Reset
              </button>
            </div>
          </div>
        )}

        {pageType === PAGE_ENUM.SINGLE && (
          <div>
            <div className="custom-control custom-switch mb-4">
              <input
                type="checkbox"
                className="custom-control-input"
                id="enable-lr_swiping"
                name="enable_lr_swiping"
                checked={isSwiping}
                onChange={onToggleSwiping}
              />
              <label
                className="custom-control-label"
                htmlFor="enable-lr_swiping"
              >
                Enable left/right swiping
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="mb-2">Reading Direction</div>
      <div
        className="setting-tab read-direction btn-options"
        data-name="reading_direction"
      >
        <div data-value="ltr" className="active">
          <i className="fa-light fa-square-arrow-right mr-1" />
          <span>Left To Right </span>
          <b>LTR</b>
        </div>
        <div data-value="rtl">
          <span>Right To Left</span>
          <b>RTL</b> <i className="fa-light fa-square-arrow-left ml-1" />
        </div>
      </div>
      <div className="mb-2">Progress Bar Position</div>
      <div
        className="setting-tab progress-position btn-options"
        data-name="progress_position"
      >
        <div
          data-value="top"
          className={classNames(
            progressPosition === PROGRESS_OFFSET_ENUM.TOP && 'active'
          )}
          onClick={() => handleChangeProgressPosition(PROGRESS_OFFSET_ENUM.TOP)}
        >
          <i className="fa-light fa-arrow-down-from-line" />
          <span>Top</span>
        </div>
        <div
          data-value="bottom"
          className={classNames(
            progressPosition === PROGRESS_OFFSET_ENUM.BOTTOM && 'active'
          )}
          onClick={() =>
            handleChangeProgressPosition(PROGRESS_OFFSET_ENUM.BOTTOM)
          }
        >
          <i className="fa-light fa-arrow-up-from-line" />
          <span>Bottom</span>
        </div>
        <div
          data-value="left"
          className={classNames(
            progressPosition === PROGRESS_OFFSET_ENUM.LEFT && 'active'
          )}
          onClick={() =>
            handleChangeProgressPosition(PROGRESS_OFFSET_ENUM.LEFT)
          }
        >
          <i className="fa-light fa-arrow-right-from-line" />
          <span>Left</span>
        </div>
        <div
          data-value="right"
          className={classNames(
            progressPosition === PROGRESS_OFFSET_ENUM.RIGHT && 'active'
          )}
          onClick={() =>
            handleChangeProgressPosition(PROGRESS_OFFSET_ENUM.RIGHT)
          }
        >
          <i className="fa-light fa-arrow-left-from-line" />
          <span>Right</span>
        </div>
        <div
          data-value="none"
          className={classNames(
            progressPosition === PROGRESS_OFFSET_ENUM.NONE && 'active'
          )}
          onClick={() =>
            handleChangeProgressPosition(PROGRESS_OFFSET_ENUM.NONE)
          }
        >
          <i className="fa-light fa-dash" /> <span>None</span>
        </div>
      </div>
      <div className="custom-control custom-switch mb-4">
        <input
          type="checkbox"
          className="custom-control-input"
          id="show_tips"
          name="show_tips"
        />
        <label className="custom-control-label" htmlFor="show_tips">
          Show tips when header and sidebar are hidden.
        </label>
      </div>
    </div>
  )
}

export default PageLayout
