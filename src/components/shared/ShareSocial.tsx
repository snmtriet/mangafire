import classNames from 'classnames'

const ShareSocial = ({ className }: { className?: string }) => {
  return (
    <div
      className={classNames(
        'sharethis-inline-share-buttons text-center st-left st-has-labels st-inline-share-buttons st-animated',
        className
      )}
      id="st-1"
    >
      <div
        className="st-btn st-first"
        data-network="facebook"
        style={{ display: 'inline-block' }}
      >
        <img
          alt="facebook sharing button"
          src="https://platform-cdn.sharethis.com/img/facebook.svg"
        />
        <span className="st-label">1.6k</span>
      </div>
      <div
        className="st-btn"
        data-network="twitter"
        style={{ display: 'inline-block' }}
      >
        <img
          alt="twitter sharing button"
          src="https://platform-cdn.sharethis.com/img/twitter.svg"
        />
        <span className="st-label">1.8k</span>
      </div>
      <div
        className="st-btn"
        data-network="messenger"
        style={{ display: 'inline-block' }}
      >
        <img
          alt="messenger sharing button"
          src="https://platform-cdn.sharethis.com/img/messenger.svg"
        />
        <span className="st-label">725</span>
      </div>
      <div
        className="st-btn"
        data-network="reddit"
        style={{ display: 'inline-block' }}
      >
        <img
          alt="reddit sharing button"
          src="https://platform-cdn.sharethis.com/img/reddit.svg"
        />
        <span className="st-label">4.9k</span>
      </div>
      <div
        className="st-btn"
        data-network="whatsapp"
        style={{ display: 'inline-block' }}
      >
        <img
          alt="whatsapp sharing button"
          src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
        />
        <span className="st-label">722</span>
      </div>
      <div
        className="st-btn st-last st-hide-label"
        data-network="telegram"
        style={{ display: 'inline-block' }}
      >
        <img
          alt="telegram sharing button"
          src="https://platform-cdn.sharethis.com/img/telegram.svg"
        />
        <span className="st-label">999</span>
      </div>
    </div>
  )
}

export default ShareSocial
