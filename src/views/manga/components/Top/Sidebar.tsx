import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const Sidebar = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const heightRef = useRef('0px')
  const [openInfo, setOpenInfo] = useState(true)

  useEffect(() => {
    if (nodeRef.current && nodeRef.current.clientHeight) {
      heightRef.current = nodeRef.current.clientHeight + 'px'
    }
  }, [openInfo, nodeRef])

  const handleOpenInfo = () => setOpenInfo((prev) => !prev)

  return (
    <>
      <button
        id="info-rating-btn"
        className="btn collapsed"
        data-toggle="collapse"
        data-target="#info-rating"
        type="button"
        onClick={handleOpenInfo}
      >
        <i className="fa-solid fa-circle-info"></i>
        <span className="mx-2">More information & Rating</span>
        <i className="fa-solid fa-star"></i>
      </button>

      <aside
        className="sidebar"
        style={
          {
            '--height': heightRef.current,
          } as React.CSSProperties
        }
      >
        <CSSTransition
          in={openInfo}
          timeout={300}
          classNames="menu"
          mountOnEnter
          unmountOnExit
          nodeRef={nodeRef}
        >
          <div ref={nodeRef} className="collapse d-block" id="info-rating">
            <div className="meta">
              <div>
                <span>Author:</span>
                <span>
                  <Link to="/author/gege-akutami">Gege Akutami</Link>
                </span>
              </div>
              <div>
                <span>Published:</span>
                <span> Mar 04, 2018 to ? </span>
              </div>
              <div>
                <span>Genres:</span>
                <span>
                  <Link to="/genre/action">Action</Link>,
                  <Link to="/genre/drama">Drama</Link>,
                  <Link to="/genre/shounen">Shounen</Link>,
                  <Link to="/genre/school">School</Link>,
                  <Link to="/genre/super-power">Super Power</Link>,
                  <Link to="/genre/supernatural">Supernatural</Link>,
                  <Link to="/genre/demons">Demons</Link>,
                  <Link to="/genre/martial-arts">Martial Arts</Link>,
                  <Link to="/genre/magic">Magic</Link>
                </span>
              </div>
              <div>
                <span>Mangazines:</span>
                <span>
                  <Link to="/magazine/shounen-jump-weekly">
                    Shounen Jump (Weekly)
                  </Link>
                </span>
              </div>
            </div>
            <div className="rating-box" data-id="26256" data-score="9.28">
              <div className="score">
                <div>
                  <span className="live-score">9.28</span>/ <span>10</span>
                </div>
                <span className="live-label">by 1,381 reviews</span>
              </div>
              <div className="stars">
                <span className="active">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="active">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="active">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="active">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="active">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </CSSTransition>
      </aside>
    </>
  )
}

export default Sidebar
