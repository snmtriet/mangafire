import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'

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
              <UlMotion
                open={toggleMenu === 'type'}
                className={classNames('c1')}
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
              </UlMotion>
            </li>
            <li>
              <span onClick={() => handleToggle('genre')}>Genres</span>
              <UlMotion
                open={toggleMenu === 'genre'}
                className={classNames('lg')}
              >
                {genres.map((genre, index) => (
                  <li key={index}>
                    <Link title={genre.title} to={genre.link}>
                      {genre.title}
                    </Link>
                  </li>
                ))}
              </UlMotion>
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

const dropdownVariants: Variants = {
  closed: {
    height: 0,
    padding: 0,
    border: 'none',
    transition: {
      duration: 0.3,
    },
  },
  open: {
    height: 'auto',
    padding: '0.8rem',
    borderTop: '1px solid #235479',
    borderBottom: '1px solid #235479',
    transition: {
      duration: 0.3,
    },
  },
}

const UlMotion = ({
  children,
  open,
  className,
}: {
  children: React.ReactNode
  open: boolean
  className?: string
}) => {
  return (
    <motion.ul
      initial="closed"
      animate={open ? 'open' : 'closed'}
      exit="closed"
      variants={dropdownVariants}
      className={className}
    >
      {children}
    </motion.ul>
  )
}
