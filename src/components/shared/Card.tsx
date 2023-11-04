import { Genre } from '@/@types/common'

type CardProps = {
  item: Genre
}

const Card = (props: CardProps) => {
  const { item } = props
  return (
    <div className="unit item-47969">
      <div className="inner">
        <a href="#" className="poster tooltipstered" data-tip="47969?/cache950">
          <div>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>
        <div className="info">
          <div>
            <span className="type">{item.type}</span>
          </div>
          <a href="/manga/isekai-hotel-e-youkoso-mazoku-de-yuusha-na-saikyou-ane-tachi-kara-dekiaisarete-komattemasu.72ox7">
            {item.title}
          </a>
          <ul className="content" data-name="chap">
            {item.chapters.map((chap, index) => (
              <li key={index}>
                <a href="/read/isekai-hotel-e-youkoso-mazoku-de-yuusha-na-saikyou-ane-tachi-kara-dekiaisarete-komattemasu.72ox7/en/chapter-1">
                  <span>
                    {chap.info} <b>{chap.lang}</b>
                  </span>
                  <span>{chap.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
