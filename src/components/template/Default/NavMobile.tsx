import React, { useEffect, useRef, HTMLProps } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { genres } from './Header'

type NavMobileProps = {
  openNav: boolean
  toggleMenu: 'genre' | 'type' | null
  handleToggle: (value: 'type' | 'genre' | null) => void
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

const NavMobile = (props: NavMobileProps) => {
  const { openNav, toggleMenu, handleToggle, setOpenNav } = props
  const { pathname } = useLocation()

  useEffect(() => {
    setOpenNav(false)
    handleToggle(null)
  }, [pathname])

  return (
    <>
      <div className={classNames('nav-mobile', openNav && 'open')}>
        <div className="top" />
        <div className="bottom">
          <ul>
            <li>
              <span onClick={() => handleToggle('type')}>Types</span>
              <UlWrapper
                open={toggleMenu === 'type'}
                className="c1"
                style={{ '--height': '81.34px' } as React.CSSProperties}
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
                style={{ '--height': '432.72px' } as React.CSSProperties}
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
      <div
        onClick={() => setOpenNav(false)}
        className={classNames('mask', openNav && 'show')}
      ></div>
    </>
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
