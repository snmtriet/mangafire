import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Genre } from '@/@types/common'
import Loading from './Loading'

type CardProps = {
  item: Genre
  index: number
}

const Card = (props: CardProps) => {
  const { item, index } = props
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) return
    const id = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(id)
  }, [mounted])

  const onMount = () => setMounted(true)
  const onDestroy = () => setMounted(false)

  return (
    <div className="unit item-47969">
      <div className="inner">
        <Tippy
          arrow={false}
          duration={300}
          animation="fade"
          onMount={onMount}
          onHide={onDestroy}
          interactive={true}
          className="tippy-sidetip"
          placement={isMobile ? 'auto' : 'right'}
          content={<TooltipContent loading={loading} />}
        >
          <Link
            to="/manga/one-punch-man"
            className="poster tooltipstered"
            data-tip="47969?/cache950"
          >
            <div>
              <img
                src={`/images/thumb-${index + 1}.png`}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>
        </Tippy>
        <div className="info">
          <div>
            <span className="type">{item.type}</span>
          </div>
          <Link to="/manga/isekai-hotel">{item.title}</Link>
          <ul className="content" data-name="chap">
            {item.chapters.map((chap, index) => (
              <li key={index}>
                <Link to="/read/isekai-hotel/en/chapter-1">
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

type TooltipContentProps = {
  loading: boolean
}

function TooltipContent(props: TooltipContentProps) {
  const { loading } = props
  return (
    <div className="tippy-box" style={{ margin: 0, width: 320 }}>
      <div className="tippy-content">
        <Loading loading={loading} type="gif">
          <div className="bookmark">
            <div className="dropleft height-limit favourite" data-id={48347}>
              <button className="btn" type="button">
                <i className="fa-solid fa-circle-bookmark fa-xl" />
              </button>
              <div className="dropdown-menu dropdown-menu-right folders" />
            </div>
          </div>
          <span>Releasing</span>
          <Link to="/manga/lovecraftian-plague-doctor">
            Lovecraftian Plague Doctor
          </Link>
          <p>
            <i className="flag EN" />
          </p>
          <p>
            <b className="text-primary">9</b> by 1 reviews
          </p>
          <nav>
            <Link to="/genre/mystery">Mystery</Link>
            <Link to="/genre/supernatural">Supernatural</Link>
            <Link to="/genre/horror">Horror</Link>
          </nav>
        </Loading>
      </div>
    </div>
  )
}
