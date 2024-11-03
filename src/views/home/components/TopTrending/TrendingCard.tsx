import { Link } from 'react-router-dom'

import { GenreTrending } from '@/@types/common'

type TrendingCardProps = {
  item: GenreTrending
  index: number
}

function TrendingCard(props: TrendingCardProps) {
  const { item, index } = props
  return (
    <div className="swiper-inner">
      <div className="bookmark">
        <div className="dropleft width-limit favourite" data-id="63">
          <button
            className="btn"
            data-toggle="dropdown"
            data-placeholder="false"
          >
            <i className="fa-solid fa-circle-bookmark"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right folders"></div>
        </div>
      </div>
      <div className="info">
        <div className="above">
          <span>{item.releasing}</span>
          <Link className="unit" to="/manga/detective-conan.1rx">
            {item.title}
          </Link>
        </div>
        <div className="below">
          <span>{item.desc}</span>
          <p>{item.chapterAndVolume}</p>
          <div>
            {item.genres.map((genre) => (
              <Link key={genre} to="/genre/comedy">
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link to="/manga/detective-conan.1rx" className="poster">
        <div>
          <img src={`/images/thumb-${index + 1}.png`} alt={item.title} />
        </div>
      </Link>
    </div>
  )
}

export default TrendingCard
