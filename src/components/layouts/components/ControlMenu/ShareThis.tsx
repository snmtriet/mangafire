const ShareThis = () => {
  return (
    <div className="mt-3 text-center">
      <div className="mb-2">Share to your friends</div>
      <div
        className="d-flex text-center sharethis-inline-share-buttons st-left st-has-labels  st-inline-share-buttons st-animated"
        id="st-1"
      >
        <div
          className="st-btn st-first st-hide-label st-remove-label"
          data-network="facebook"
          style={{ display: 'inline-block' }}
        >
          <img
            alt="facebook sharing button"
            src="https://platform-cdn.sharethis.com/img/facebook.svg"
          />
          <span className="st-label"></span>
        </div>
        <div
          className="st-btn st-hide-label st-remove-label"
          data-network="twitter"
          style={{ display: 'inline-block' }}
        >
          <img
            alt="twitter sharing button"
            src="https://platform-cdn.sharethis.com/img/twitter.svg"
          />
          <span className="st-label"></span>
        </div>
        <div
          className="st-btn st-hide-label st-remove-label"
          data-network="messenger"
          style={{ display: 'inline-block' }}
        >
          <img
            alt="messenger sharing button"
            src="https://platform-cdn.sharethis.com/img/messenger.svg"
          />
          <span className="st-label"></span>
        </div>
        <div
          className="st-btn st-hide-label st-remove-label"
          data-network="reddit"
          style={{ display: 'inline-block' }}
        >
          <img
            alt="reddit sharing button"
            src="https://platform-cdn.sharethis.com/img/reddit.svg"
          />
          <span className="st-label"></span>
        </div>
        <div
          className="st-btn st-hide-label st-remove-label"
          data-network="whatsapp"
          style={{ display: 'none' }}
        >
          <img
            alt="whatsapp sharing button"
            src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
          />
          <span className="st-label"></span>
        </div>
        <div
          className="st-btn st-last st-hide-label st-remove-label"
          data-network="telegram"
          style={{ display: 'none' }}
        >
          <img
            alt="telegram sharing button"
            src="https://platform-cdn.sharethis.com/img/telegram.svg"
          />
          <span className="st-label"></span>
        </div>
      </div>
    </div>
  )
}

export default ShareThis
