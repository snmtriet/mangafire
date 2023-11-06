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
                <LiMotion>
                  <Link title="Manga mangas" to="/type/manga">
                    Manga
                  </Link>
                </LiMotion>
                <LiMotion>
                  <Link title="One-Shot mangas" to="/type/one-shot">
                    One-Shot
                  </Link>
                </LiMotion>
                <LiMotion>
                  <Link title="Doujinshi mangas" to="/type/doujinshi">
                    Doujinshi
                  </Link>
                </LiMotion>
                <LiMotion>
                  <Link title="Novel mangas" to="/type/novel">
                    Novel
                  </Link>
                </LiMotion>
                <LiMotion>
                  <Link title="Manhwa mangas" to="/type/manhwa">
                    Manhwa
                  </Link>
                </LiMotion>
                <LiMotion>
                  <Link title="Manhua mangas" to="/type/manhua">
                    Manhua
                  </Link>
                </LiMotion>
              </UlMotion>
            </li>
            <li>
              <span onClick={() => handleToggle('genre')}>Genres</span>
              <UlMotion
                open={toggleMenu === 'genre'}
                className={classNames('lg')}
              >
                {genres.map((genre, index) => (
                  <LiMotion key={index}>
                    <Link title={genre.title} to={genre.link}>
                      {genre.title}
                    </Link>
                  </LiMotion>
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

const li: Variants = {
  closed: { x: -16, opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.3 } },
}

const dropdownVariants: Variants = {
  closed: {
    height: 0,
    padding: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    height: 'auto',
    padding: '0.8rem',
    border: '1px solid #235479',
    transition: {
      type: 'anticipate',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
}

const LiMotion = ({ children }: { children: React.ReactNode }) => {
  return <motion.li variants={li}>{children}</motion.li>
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
