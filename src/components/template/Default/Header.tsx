import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import NavMobile from './NavMobile'
import Modal, { Forgot, Login, Register } from '@/components/ui/Modal'
import { MODAL_AUTH_ENUM } from '@/@types/modal'
import { useClickOutside } from '@/utils/hooks'

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
  const [openSearch, setOpenSearch] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [toggleMenu, setToggleMenu] = useState<'type' | 'genre' | null>(null)
  const [openModal, setOpenModal] = useState(MODAL_AUTH_ENUM.CLOSE)

  const navRef = useClickOutside(() => handleCloseNav())

  const handleOpen = () => setOpenSearch(true)
  const handleClose = () => setOpenSearch(false)

  const handleToggleNav = () => setOpenNav((prev) => !prev)
  const handleCloseNav = () => {
    setOpenNav(false)
    handleToggle(null)
  }

  const handleOpenModal = (type: MODAL_AUTH_ENUM) => {
    setOpenModal(type)
  }
  const handleCloseModal = () => setOpenModal(MODAL_AUTH_ENUM.CLOSE)

  const handleToggle = (value: 'type' | 'genre' | null) =>
    setToggleMenu((prev) => (value === null || value === prev ? null : value))

  return (
    <>
      <header id="header" style={openSearch ? { backdropFilter: 'none' } : {}}>
        <div className="container">
          <div className="component">
            <div ref={navRef}>
              <button
                id="nav-menu-btn"
                className="btn nav-btn"
                onClick={handleToggleNav}
              >
                <i className="fa-regular fa-bars fa-lg"></i>
              </button>
              <NavMobile
                openNav={openNav}
                toggleMenu={toggleMenu}
                onCloseNav={handleCloseNav}
                handleToggle={handleToggle}
              />
            </div>
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
            <div id="nav-search" className={classNames(openSearch && 'active')}>
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
                onClick={() => handleOpenModal(MODAL_AUTH_ENUM.LOGIN)}
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

      <Modal
        open={openModal === MODAL_AUTH_ENUM.LOGIN}
        onClose={handleCloseModal}
      >
        <Login onOpen={handleOpenModal} />
      </Modal>
      <Modal
        open={openModal === MODAL_AUTH_ENUM.REGISTER}
        onClose={handleCloseModal}
      >
        <Register onOpen={handleOpenModal} />
      </Modal>
      <Modal
        open={openModal === MODAL_AUTH_ENUM.FORGOT}
        onClose={handleCloseModal}
      >
        <Forgot onOpen={handleOpenModal} />
      </Modal>
    </>
  )
}

export default Header
