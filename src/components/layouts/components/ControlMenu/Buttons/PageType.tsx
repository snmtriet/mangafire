import { PageType as PageEnum } from '@/@types/theme'
import { PAGE_ENUM } from '@/constants/page.constant'
import { setPageType, useAppDispatch, useAppSelector } from '@/store'

const PageType = () => {
  const { pageType } = useAppSelector((state) => state.theme)
  return (
    <>
      <div className="btn-options mb-2">
        <div className="d-block">
          <ButtonContent />
        </div>
      </div>
      {pageType === PAGE_ENUM.DOUBLE && (
        <div className="doublepage-offset-spreads mb-2">
          <button className="justify-content-between">
            <span>Double Page Offset Spreads</span>
            <i className="fa-light fa-arrows-left-right-to-line fa-lg"></i>
          </button>
        </div>
      )}

      <svg className="d-none">
        <symbol
          id="icon-longstrip"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M14,1.2v3.6c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V1.2h1v3.6c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V1.2H14z M12,9.4H4 c-1.1,0-2,0.9-2,2V15h1v-3.6c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V15h1v-3.6C14,10.3,13.1,9.4,12,9.4z"></path>{' '}
        </symbol>
      </svg>
    </>
  )
}

export default PageType

function ButtonContent() {
  const dispatch = useAppDispatch()
  const { pageType } = useAppSelector((state) => state.theme)

  const handleChangePageType = (type: PageEnum) => {
    dispatch(setPageType(type))
  }

  if (pageType === PAGE_ENUM.DOUBLE) {
    return (
      <button
        className="justify-content-between"
        onClick={() => handleChangePageType(PAGE_ENUM.LONG_STRIP)}
      >
        <span>Double Page</span>
        <i className="fa-light fa-book-open fa-lg"></i>
      </button>
    )
  }
  if (pageType === PAGE_ENUM.LONG_STRIP) {
    return (
      <button
        className="justify-content-between"
        onClick={() => handleChangePageType(PAGE_ENUM.SINGLE)}
      >
        <span>Long Strip</span>
        <svg>
          <use xlinkHref="#icon-longstrip"></use>
        </svg>
      </button>
    )
  }
  return (
    <button
      className="justify-content-between"
      onClick={() => handleChangePageType(PAGE_ENUM.DOUBLE)}
    >
      <span>Single Page</span>
      <i className="fa-light fa-page fa-lg"></i>
    </button>
  )
}
