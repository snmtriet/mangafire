const genres = [
  { title: 'Action', link: 'https://mangafire.to/genre/action' },
  { title: 'Adventure', link: 'https://mangafire.to/genre/adventure' },
  { title: 'Avant Garde', link: 'https://mangafire.to/genre/avant-garde' },
  { title: 'Boys Love', link: 'https://mangafire.to/genre/boys-love' },
  { title: 'Comedy', link: 'https://mangafire.to/genre/comedy' },
  { title: 'Demons', link: 'https://mangafire.to/genre/demons' },
  { title: 'Drama', link: 'https://mangafire.to/genre/drama' },
  { title: 'Ecchi', link: 'https://mangafire.to/genre/ecchi' },
  { title: 'Fantasy', link: 'https://mangafire.to/genre/fantasy' },
  { title: 'Girls Love', link: 'https://mangafire.to/genre/girls-love' },
  { title: 'Gourmet', link: 'https://mangafire.to/genre/gourmet' },
  { title: 'Harem', link: 'https://mangafire.to/genre/harem' },
  { title: 'Horror', link: 'https://mangafire.to/genre/horror' },
  { title: 'Isekai', link: 'https://mangafire.to/genre/isekai' },
  { title: 'Iyashikei', link: 'https://mangafire.to/genre/iyashikei' },
  { title: 'Josei', link: 'https://mangafire.to/genre/josei' },
  { title: 'Kids', link: 'https://mangafire.to/genre/kids' },
  { title: 'Magic', link: 'https://mangafire.to/genre/magic' },
  { title: 'Mahou Shoujo', link: 'https://mangafire.to/genre/mahou-shoujo' },
  { title: 'Martial Arts', link: 'https://mangafire.to/genre/martial-arts' },
  { title: 'Mecha', link: 'https://mangafire.to/genre/mecha' },
  { title: 'Military', link: 'https://mangafire.to/genre/military' },
  { title: 'Music', link: 'https://mangafire.to/genre/music' },
  { title: 'Mystery', link: 'https://mangafire.to/genre/mystery' },
  { title: 'Parody', link: 'https://mangafire.to/genre/parody' },
  { title: 'Psychological', link: 'https://mangafire.to/genre/psychological' },
  { title: 'Reverse Harem', link: 'https://mangafire.to/genre/reverse-harem' },
  { title: 'Romance', link: 'https://mangafire.to/genre/romance' },
  { title: 'School', link: 'https://mangafire.to/genre/school' },
  { title: 'Sci-Fi', link: 'https://mangafire.to/genre/sci-fi' },
  { title: 'Seinen', link: 'https://mangafire.to/genre/seinen' },
  { title: 'Shoujo', link: 'https://mangafire.to/genre/shoujo' },
  { title: 'Shounen', link: 'https://mangafire.to/genre/shounen' },
  { title: 'Slice of Life', link: 'https://mangafire.to/genre/slice-of-life' },
  { title: 'Space', link: 'https://mangafire.to/genre/space' },
  { title: 'Sports', link: 'https://mangafire.to/genre/sports' },
  { title: 'Super Power', link: 'https://mangafire.to/genre/super-power' },
  { title: 'Supernatural', link: 'https://mangafire.to/genre/supernatural' },
  { title: 'Suspense', link: 'https://mangafire.to/genre/suspense' },
  { title: 'Thriller', link: 'https://mangafire.to/genre/thriller' },
  { title: 'Vampire', link: 'https://mangafire.to/genre/vampire' },
]

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="component">
          <button id="nav-menu-btn" className="btn nav-btn">
            <i className="fa-regular fa-bars fa-lg"></i>
          </button>
          <a href="home" className="logo">
            <img src="/logo.png" alt="MangaFire" />
          </a>
          <div id="nav-menu">
            <ul>
              <li>
                <a href="#">Types</a>
                <ul className="c1">
                  <li>
                    <a title="Manga mangas" href="/type/manga">
                      Manga
                    </a>
                  </li>
                  <li>
                    <a title="One-Shot mangas" href="/type/one-shot">
                      One-Shot
                    </a>
                  </li>
                  <li>
                    <a title="Doujinshi mangas" href="/type/doujinshi">
                      Doujinshi
                    </a>
                  </li>
                  <li>
                    <a title="Novel mangas" href="/type/novel">
                      Novel
                    </a>
                  </li>
                  <li>
                    <a title="Manhwa mangas" href="/type/manhwa">
                      Manhwa
                    </a>
                  </li>
                  <li>
                    <a title="Manhua mangas" href="/type/manhua">
                      Manhua
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Genres</a>
                <ul className="lg">
                  {genres.map((genre, index) => (
                    <li key={index}>
                      <a title={genre.title} href={genre.link}>
                        {genre.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="newest" title="New Release Manga">
                  Newest
                </a>
              </li>
              <li>
                <a href="updated" title="Recently Updated Manga">
                  Updated
                </a>
              </li>
              <li>
                <a href="added" title="Recently Added Manga">
                  Added
                </a>
              </li>
              <li>
                <a href="random" title="Random Manga">
                  <i className="mr-1 fa-regular fa-shuffle"></i> Random
                </a>
              </li>
            </ul>
          </div>
          <div id="nav-search">
            <div className="search-inner">
              <form action="filter" autoComplete="off">
                <i className="fa-regular fa-magnifying-glass text-muted mr-1"></i>
                <input
                  type="text"
                  placeholder="Search manga..."
                  name="keyword"
                />
                <a href="filter" className="btn btn-primary2">
                  <i className="fa-regular fa-circles-overlap fa-xs"></i>
                  <span>Filter</span>
                </a>
              </form>
              <div className="suggestion"></div>
            </div>
          </div>
          <button id="nav-search-btn" className="btn nav-btn">
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
          <div className="nav-user" id="user">
            <button
              data-toggle="modal"
              data-target="#sign"
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
  )
}

export default Header
