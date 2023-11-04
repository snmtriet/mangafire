import React from 'react'

const Head = () => {
  return (
    <div className="head">
      <h2>
        Recently <span>Updated</span>
      </h2>
      <div className="tabs" data-tabs="">
        <div
          className="tab active"
          data-name="all"
          data-ajax="ajax/home/widget/updated-all"
        >
          Updated
        </div>
        <div
          className="tab"
          data-name="trending"
          data-ajax="ajax/home/widget/trending"
        >
          Trending
        </div>
        <div className="s-pagi js">
          <div className="nav prev disabled" data-original-title="Page 1">
            <i className="fa-solid fa-square-chevron-left fa-lg"></i>
          </div>
          <div className="nav next" data-original-title="Page 2">
            <i className="fa-solid fa-square-chevron-right fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
