import { Poster as PosterType } from '@/@types/common'

type PosterProps = {
  item: PosterType
  index?: number
}

const Poster = (props: PosterProps) => {
  const { item, index } = props
  return (
    <a href="/manga/one-punch-man.oo4">
      {index ? <b>{index}</b> : null}
      <div className="poster">
        <div>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <span>{item.title}</span>
    </a>
  )
}

export default Poster
