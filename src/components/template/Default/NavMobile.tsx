import React, { useEffect, useRef, HTMLProps } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { genres } from './Header'

type NavMobileProps = {
  openNav: boolean
  toggleMenu: 'genre' | 'type' | null
  handleToggle: (value: 'type' | 'genre' | null) => void
  onCloseNav: () => void
}

const NavMobile = (props: NavMobileProps) => {
  const { openNav, toggleMenu, handleToggle, onCloseNav } = props
  const { pathname } = useLocation()
  const nodeRef = useRef(null)

  useEffect(() => {
    onCloseNav()
    handleToggle(null)
  }, [pathname])

  return (
    <CSSTransition
      in={openNav}
      timeout={300}
      classNames="nav-menu"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={classNames('nav-mobile', openNav && 'open')}
        style={
          {
            '--width': toggleMenu !== null ? '292px' : '140px',
          } as React.CSSProperties
        }
      >
        <div className="content">
          <ul>
            <li>
              <span onClick={() => handleToggle('type')}>Types</span>
              <UlWrapper
                open={toggleMenu === 'type'}
                className="c1"
                style={{ '--height': '111px' } as React.CSSProperties}
              >
                <li>
                  <Link title="Manga mangas" to="/type/manga">
                    Manga
                  </Link>
                </li>
                <li>
                  <Link title="One-Shot mangas" to="/type/one-shot">
                    One-Shot
                  </Link>
                </li>
                <li>
                  <Link title="Doujinshi mangas" to="/type/doujinshi">
                    Doujinshi
                  </Link>
                </li>
                <li>
                  <Link title="Novel mangas" to="/type/novel">
                    Novel
                  </Link>
                </li>
                <li>
                  <Link title="Manhwa mangas" to="/type/manhwa">
                    Manhwa
                  </Link>
                </li>
                <li>
                  <Link title="Manhua mangas" to="/type/manhua">
                    Manhua
                  </Link>
                </li>
              </UlWrapper>
            </li>
            <li>
              <span onClick={() => handleToggle('genre')}>Genres</span>
              <UlWrapper
                open={toggleMenu === 'genre'}
                className="lg"
                style={{ '--height': '638px' } as React.CSSProperties}
              >
                {genres.map((genre, index) => (
                  <li key={index}>
                    <Link title={genre.title} to={genre.link}>
                      {genre.title}
                    </Link>
                  </li>
                ))}
              </UlWrapper>
            </li>
            <li>
              <Link to="/newest" title="New Release Manga">
                Newest
              </Link>
            </li>
            <li>
              <Link to="/updated" title="Recently Updated Manga">
                Updated
              </Link>
            </li>
            <li>
              <Link to="/added" title="Recently Added Manga">
                Added
              </Link>
            </li>
            <li>
              <Link to="/random" title="Random Manga">
                <i className="mr-1 fa-regular fa-shuffle"></i> Random
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>
  )
}

export default NavMobile

type UlWrapperProps = {
  children: React.ReactNode
  open: boolean
  className?: string
} & HTMLProps<HTMLUListElement>

const UlWrapper = (props: UlWrapperProps) => {
  const { children, open, className, ...rest } = props
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      in={open}
      timeout={300}
      unmountOnExit
      mountOnEnter
      nodeRef={nodeRef}
      classNames="menu"
    >
      <ul ref={nodeRef} className={className} {...rest}>
        {children}
      </ul>
    </CSSTransition>
  )
}
