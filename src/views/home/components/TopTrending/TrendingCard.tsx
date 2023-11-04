import { GenreTrending } from '@/@types/common'

type TrendingCardProps = {
  item: GenreTrending
}

function TrendingCard(props: TrendingCardProps) {
  const { item } = props
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
          <a className="unit" href="/manga/detective-conan.1rx">
            {item.title}
          </a>
        </div>
        <div className="below">
          <span>{item.desc}</span>
          <p>{item.chapterAndVolume}</p>
          <div>
            {item.genres.map((genre) => (
              <a key={genre} href="/genre/comedy">
                {genre}
              </a>
            ))}
          </div>
        </div>
      </div>
      <a href="/manga/detective-conan.1rx" className="poster">
        <div>
          <img src={item.image} alt={item.title} />
        </div>
      </a>
    </div>
  )
}

export default TrendingCard
