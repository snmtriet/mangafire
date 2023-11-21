import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import NavMobile from './NavMobile'
import { isBrowser } from 'react-device-detect'
import Modal, { Login } from '@/components/ui/Modal'

export const genres = [
  { title: 'Action', link: '/genre/action' },
  { title: 'Adventure', link: '/genre/adventure' },
  { title: 'Avant Garde', link: '/genre/avant-garde' },
  { title: 'Boys Love', link: '/genre/boys-love' },
  { title: 'Comedy', link: '/genre/comedy' },
  { title: 'Demons', link: '/genre/demons' },
  { title: 'Drama', link: '/genre/drama' },
  { title: 'Ecchi', link: '/genre/ecchi' },
  { title: 'Fantasy', link: '/genre/fantasy' },
  { title: 'Girls Love', link: '/genre/girls-love' },
  { title: 'Gourmet', link: '/genre/gourmet' },
  { title: 'Harem', link: '/genre/harem' },
  { title: 'Horror', link: '/genre/horror' },
  { title: 'Isekai', link: '/genre/isekai' },
  { title: 'Iyashikei', link: '/genre/iyashikei' },
  { title: 'Josei', link: '/genre/josei' },
  { title: 'Kids', link: '/genre/kids' },
  { title: 'Magic', link: '/genre/magic' },
  { title: 'Mahou Shoujo', link: '/genre/mahou-shoujo' },
  { title: 'Martial Arts', link: '/genre/martial-arts' },
  { title: 'Mecha', link: '/genre/mecha' },
  { title: 'Military', link: '/genre/military' },
  { title: 'Music', link: '/genre/music' },
  { title: 'Mystery', link: '/genre/mystery' },
  { title: 'Parody', link: '/genre/parody' },
  { title: 'Psychological', link: '/genre/psychological' },
  { title: 'Reverse Harem', link: '/genre/reverse-harem' },
  { title: 'Romance', link: '/genre/romance' },
  { title: 'School', link: '/genre/school' },
  { title: 'Sci-Fi', link: '/genre/sci-fi' },
  { title: 'Seinen', link: '/genre/seinen' },
  { title: 'Shoujo', link: '/genre/shoujo' },
  { title: 'Shounen', link: '/genre/shounen' },
  { title: 'Slice of Life', link: '/genre/slice-of-life' },
  { title: 'Space', link: '/genre/space' },
  { title: 'Sports', link: '/genre/sports' },
  { title: 'Super Power', link: '/genre/super-power' },
  { title: 'Supernatural', link: '/genre/supernatural' },
  { title: 'Suspense', link: '/genre/suspense' },
  { title: 'Thriller', link: '/genre/thriller' },
  { title: 'Vampire', link: '/genre/vampire' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [toggleMenu, setToggleMenu] = useState<'type' | 'genre' | null>(null)

  useEffect(() => {
    if (!openNav) document.body.removeAttribute('style')
    else document.body.style.overflow = 'hidden'
  }, [openNav])

  const handleToggle = (value: 'type' | 'genre' | null) =>
    setToggleMenu((prev) => (value === null || value === prev ? null : value))

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <header
        id="header"
        style={!isBrowser && openNav ? { background: '#1e2c43' } : {}}
      >
        <div className="container">
          <div className="component">
            <button
              id="nav-menu-btn"
              className="btn nav-btn"
              onClick={() => setOpenNav((prev) => !prev)}
            >
              <i className="fa-regular fa-bars fa-lg"></i>
            </button>
            <Link to="/home" className="logo">
              <img src="/logo.png" alt="MangaFire" />
            </Link>
            <div id="nav-menu">
              <ul>
                <li>
                  <Link to="#">Types</Link>
                  <ul className="c1">
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
                  <Link to="#">Genres</Link>
                  <ul className="lg">
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
                  <Link to="newest" title="New Release Manga">
                    Newest
                  </Link>
                </li>
                <li>
                  <Link to="updated" title="Recently Updated Manga">
                    Updated
                  </Link>
                </li>
                <li>
                  <Link to="added" title="Recently Added Manga">
                    Added
                  </Link>
                </li>
                <li>
                  <Link to="random" title="Random Manga">
                    <i className="mr-1 fa-regular fa-shuffle"></i> Random
                  </Link>
                </li>
              </ul>
            </div>
            <div id="nav-search" className={classNames(open && 'active')}>
              <div className="overlay" onClick={handleClose}></div>
              <div className="search-inner">
                <form action="filter" autoComplete="off">
                  <i className="fa-regular fa-magnifying-glass text-muted mr-1"></i>
                  <input
                    type="text"
                    placeholder="Search manga..."
                    name="keyword"
                  />
                  <Link to="filter" className="btn btn-primary2">
                    <i className="fa-regular fa-circles-overlap fa-xs"></i>
                    <span>Filter</span>
                  </Link>
                </form>
                <div className="suggestion"></div>
              </div>
            </div>
            <button
              onClick={handleOpen}
              id="nav-search-btn"
              className="btn nav-btn"
            >
              <i className="fa-regular fa-magnifying-glass"></i>
            </button>
            <div className="nav-user" id="user">
              <button
                data-toggle="modal"
                data-target=".signin-modal"
                className="btn btn-primary rounded-pill"
              >
                <span className="d-none d-sm-inline pl-1 mr-1">Login</span>
                <i className="d-inline d-sm-none fa-solid fa-user-vneck"></i>
                <i className="d-none d-sm-inline fa-solid fa-sm fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <NavMobile
        openNav={openNav}
        toggleMenu={toggleMenu}
        setOpenNav={setOpenNav}
        handleToggle={handleToggle}
      />
      <Modal className="signin-modal">
        <Login />
      </Modal>
    </>
  )
}

export default Header
