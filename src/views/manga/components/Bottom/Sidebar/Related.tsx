import Recommend from './Recommend'

const data = [
  {
    title: "One Piece: Naoshi Komi Covers Vivi's Adventure",
  },
  {
    title: 'ONE PIECE x Toriko',
  },
  {
    title: 'One Piece: Boichi Covers Zolo vs. Mihawk',
  },
  {
    title: 'Cross Epoch',
  },
  {
    title: 'Wanted!',
  },
  {
    title: 'One Piece in Love',
  },
  {
    title: 'One Piece Episode A',
  },
  {
    title: 'One Piece - Nami vs. Kalifa',
  },
]

const Related = () => {
  return (
    <aside className="sidebar">
      <section className="m-related default-style">
        <div className="head">
          <h2>Related Manga</h2>
          <div className="dropdown p-menu">
            <button
              className="btn btn-secondary1 dropdown-toggle"
              type="button"
              data-placeholder="false"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </button>
            <div className="dropdown-menu dropdown-menu-right d-none">
              <a className="dropdown-item tab active" data-name="Prequel">
                Prequel
              </a>
            </div>
          </div>
        </div>
        <ul className="tab-content scroll-sm d-block" data-name="Other">
          {data.map((item) => (
            <li key={item.title}>
              <a href="/manga/one-piece-vivi-no-bouken.dqv">{item.title}</a>
            </li>
          ))}
        </ul>
      </section>
      <Recommend />
    </aside>
  )
}

export default Related
