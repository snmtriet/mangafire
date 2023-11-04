const Head = () => {
  return (
    <div className="head">
      <h2>Most Viewed</h2>
      <div className="tabs" data-tabs="">
        <div className="tab active" data-name="day">
          Day
        </div>
        <div className="tab" data-name="week">
          Week
        </div>
        <div className="tab" data-name="month">
          Month
        </div>
      </div>
    </div>
  )
}

export default Head
