import { Link } from 'react-router-dom'

import { Genre } from '@/@types/common'

type CardProps = {
  item: Genre
}

const Card = (props: CardProps) => {
  const { item } = props
  return (
    <div className="unit item-47969">
      <div className="inner">
        <Link
          to="/manga/one-punch-man"
          className="poster tooltipstered"
          data-tip="47969?/cache950"
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>
        <div className="info">
          <div>
            <span className="type">{item.type}</span>
          </div>
          <Link to="/manga/isekai-hotel-e-youkoso-mazoku-de-yuusha-na-saikyou-ane-tachi-kara-dekiaisarete-komattemasu.72ox7">
            {item.title}
          </Link>
          <ul className="content" data-name="chap">
            {item.chapters.map((chap, index) => (
              <li key={index}>
                <Link to="/read/isekai-hotel-e-youkoso-mazoku-de-yuusha-na-saikyou-ane-tachi-kara-dekiaisarete-komattemasu.72ox7/en/chapter-1">
                  <span>
                    {chap.info} <b>{chap.lang}</b>
                  </span>
                  <span>{chap.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
