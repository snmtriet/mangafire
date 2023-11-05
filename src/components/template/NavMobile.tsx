import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { genres } from './Header'

type NavMobileProps = {
  openNav: boolean
  toggleMenu: 'genre' | 'type' | null
  handleToggle: (value: 'type' | 'genre' | null) => void
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

const NavMobile = (props: NavMobileProps) => {
  const { openNav, toggleMenu, handleToggle, setOpenNav } = props
  return (
    <>
      <div className={classNames('nav-mobile', openNav && 'open')}>
        <div className="top" />
        <div className="bottom">
          <ul>
            <li>
              <span onClick={() => handleToggle('type')}>Types</span>
              <ul
                className={classNames(
                  'c1',
                  toggleMenu === 'type' ? 'd-block' : 'd-none'
                )}
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
              </ul>
            </li>
            <li>
              <span onClick={() => handleToggle('genre')}>Genres</span>
              <ul
                className={classNames(
                  'lg',
                  toggleMenu === 'genre' ? 'd-block' : 'd-none'
                )}
              >
                {genres.map((genre, index) => (
                  <li key={index}>
                    <Link title={genre.title} to={genre.link}>
                      {genre.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
