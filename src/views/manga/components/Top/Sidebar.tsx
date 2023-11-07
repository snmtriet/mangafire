import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="collapse" id="info-rating">
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
    </aside>
  )
}

export default Sidebar
