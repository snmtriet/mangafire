const Direction = () => {
  return (
    <div className="btn-options mb-2" data-name="reading_direction">
      <div data-value="ltr" className="d-block">
        <button className="justify-content-between">
          <span>Left to Right</span>
          <i className="fa-light fa-square-arrow-right fa-lg"></i>
        </button>
      </div>
      <div data-value="rtl" className="d-none">
        <button className="justify-content-between">
          <span>Right to Left</span>
          <i className="fa-light fa-square-arrow-left fa-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default Direction
