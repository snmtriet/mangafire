import { Link } from 'react-router-dom'

import { ShareSocial } from '@/components/shared'

const Content = () => {
  return (
    <aside className="content">
      <div className="poster">
        <div>
          <img src="/detail.jpeg" alt="Jujutsu Kaisen" />
        </div>
      </div>
      <div className="info">
        <p>Releasing</p>
        <h1>Jujutsu Kaisen</h1>
        <h6>
          Jujutsu Kaisen; Магическая битва; 주술회전; Batalla de hechiceros;
          Жүжүцү Кайсэн; Сиқырлы Шайқас
        </h6>
        <div className="actions">
          <Link
            className="btn btn-lg btn-primary readnow"
            to="/read/jujutsu-kaisen"
          >
            <span>Start Reading</span>
            <span>Read Now</span>
            <i className="fa-solid fa-play fa-xs"></i>
          </Link>
          <div className="bookmark dropright favourite">
            <button className="btn btn-lg btn-secondary1 h-100" type="button">
              <span>Bookmark</span>
              <i className="fa-solid fa-bookmark fa-xs"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right folders"></div>
          </div>
        </div>
        <div className="min-info">
          <Link to="/type/manga">Manga</Link>
          <span>
            <i className="fa-regular fa-folder-bookmark"></i> 16,318
          </span>
          <span>
            <b>8.53 MAL</b> by 143,561 users
          </span>
        </div>
        <div className="description">
          Unbeknownst to many, an ancient war wages on between humanity and
          supernatural beasts dubbed "Curses". Striking from the shadows, these
          monsters wreak...
        </div>
        <button className="readmore">Read more +</button>
        <ShareSocial className="mt-3 justify-content-start" />
      </div>
      <button
        id="info-rating-btn"
        className="btn collapsed"
        data-toggle="collapse"
        data-target="#info-rating"
        type="button"
      >
        <i className="fa-solid fa-circle-info"></i>
        <span className="mx-2">More information & Rating</span>
        <i className="fa-solid fa-star"></i>
      </button>
    </aside>
  )
}

export default Content
