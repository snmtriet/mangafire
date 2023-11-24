import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ShareSocial } from '@/components/shared'
import Modal from '@/components/ui/Modal'

const Content = () => {
  const [isReadMore, setIsReadMore] = useState(false)

  const handleOpenModal = () => setIsReadMore(true)
  const handleCloseModal = () => setIsReadMore(false)

  return (
    <aside className="content">
      <div className="poster">
        <div>
          <img src="/detail.jpg" alt="Jujutsu Kaisen" />
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
        <button className="readmore" onClick={handleOpenModal}>
          Read more +
        </button>
        <ShareSocial className="mt-3 justify-content-center justify-content-md-start" />
      </div>

      <Modal open={isReadMore} onClose={handleCloseModal}>
        Unbeknownst to many, an ancient war wages on between humanity and
        supernatural beasts dubbed "Curses". Striking from the shadows, these
        monsters wreak havoc on society, but the "Jujutsu" sorcerers have the
        mystical prowess to combat them. When Yuuji Itadori, a high school
        student, unwittingly stumbles upon a dry finger belonging to the
        mythical Curse Sukuna Ryoumen, he finds himself embroiled in this bloody
        battle.
        <br /> In a desperate attempt to escape the Curse's clutches, Yuuji uses
        the finger's energy to defend himself, inadvertently gaining power to
        fend off the Curses but also unleashing the malicious Sukuna back into
        the world. Though Yuuji is able to keep Sukuna contained within his
        body, the Jujutsu world deems him a dangerous, high-level Curse that
        must be eradicated.
        <br /> Sentenced to death, Yuuji meets Satoru Gojou, a teacher at
        Jujutsu High School, who offers an alternative. As a unique vessel to
        Sukuna, Yuuji's death would spell the end of the demon as well. To
        achieve this, Yuuji must consume Sukuna's remaining parts, which will
        guarantee his execution and ensure the eradication of the malevolent
        force. As a way to protect the world and have some semblance of a life,
        Yuuji enrolls in Jujutsu High and thrusts himself into the ruthless and
        unforgiving battlefield.
      </Modal>
    </aside>
  )
}

export default Content
