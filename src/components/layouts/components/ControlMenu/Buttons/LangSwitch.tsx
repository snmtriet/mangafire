import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useClickOutside } from '@/utils/hooks'

const LangSwitch = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const nodeRef = useRef(null)
  const dropdownRef = useClickOutside(() => setOpenDropdown(false))
  return (
    <div className="dropdown mb-2" ref={dropdownRef}>
      <button
        className="justify-content-center"
        onClick={() => setOpenDropdown((prev) => !prev)}
      >
        <i className="fa-regular fa-earth-americas"></i>
        <span className="mx-1">Language: </span>
        <b className="lang-view">English</b>
      </button>
      <CSSTransition
        in={openDropdown}
        mountOnEnter
        unmountOnExit
        timeout={300}
        nodeRef={nodeRef}
        classNames="dropdown"
      >
        <div
          ref={nodeRef}
          className="lang-options dropdown-menu w-100 dropdown-menu-right d-block"
        >
          <Link
            className="dropdown-item active"
            to="#"
            data-code="en"
            data-title="English"
          >
            <i className="flag EN"></i> English
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="fr"
            data-title="French"
          >
            <i className="flag FR"></i> French
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="es"
            data-title="Spanish"
          >
            <i className="flag ES"></i> Spanish
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="es-la"
            data-title="Spanish (LATAM)"
          >
            <i className="flag ES-LA"></i> Spanish (LATAM)
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="pt-br"
            data-title="Portuguese (Br)"
          >
            <i className="flag PT-BR"></i> Portuguese (Br)
          </Link>
          <Link
            className="dropdown-item"
            to="#"
            data-code="ja"
            data-title="Japanese"
          >
            <i className="flag JA"></i> Japanese
          </Link>
        </div>
      </CSSTransition>
    </div>
  )
}

export default LangSwitch
