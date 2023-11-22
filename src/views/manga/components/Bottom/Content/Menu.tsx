import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useClickOutside, useWindowDimensions } from '@/utils/hooks'

const ChaptersMenu = () => {
  const [open, setOpen] = useState(false)
  const { width } = useWindowDimensions()
  const screenMedium = width < 768
  const dropdownNode = useClickOutside(() => setOpen(false))
  const nodeRef = useRef(null)

  const handleOpen = () => setOpen((prev) => !prev)

  return (
    <div className="list-menu">
      <div className="dropdown responsive show" ref={dropdownNode}>
        <button
          className="btn btn-secondary1"
          type="button"
          onClick={handleOpen}
        >
          <i className="fa-solid fa-earth-americas"></i> Lang
          <span>uage</span>: <b>EN</b>
        </button>
        <CSSTransition
          in={open}
          mountOnEnter
          unmountOnExit
          timeout={300}
          nodeRef={nodeRef}
          classNames="dropdown"
        >
          <div
            ref={nodeRef}
            className="dropdown-menu d-block"
            style={{
              transformOrigin: screenMedium ? 'center' : 'top center',
            }}
          >
            <Link
              className="dropdown-item active"
              to="#"
              data-code="EN"
              data-title="English"
            >
              <i className="flag EN"></i> English (247 Chapters)
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-code="FR"
              data-title="French"
            >
              <i className="flag FR"></i> French (45 Chapters)
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-code="ES"
              data-title="Spanish"
            >
              <i className="flag ES"></i> Spanish (6 Chapters)
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-code="ES-LA"
              data-title="Spanish (LATAM)"
            >
              <i className="flag ES-LA"></i> Spanish (LATAM) (137 Chapters)
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-code="PT-BR"
              data-title="Portuguese (Br)"
            >
              <i className="flag PT-BR"></i> Portuguese (Br) (244 Chapters)
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-code="JA"
              data-title="Japanese"
            >
              <i className="flag JA"></i> Japanese (217 Chapters)
            </Link>
          </div>
        </CSSTransition>
        {open && <div className="overlay" onClick={handleOpen}></div>}
      </div>
      <form className="form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Chap number..."
        />
        <button className="btn" type="submit">
          <i className="fa-regular fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default ChaptersMenu
