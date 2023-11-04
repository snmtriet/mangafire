const Head = () => {
  return (
    <div className="head">
      <h2>New Release</h2>
      <div className="tabs">
        <div className="s-pagi">
          <div className="complete-button-prev-release" role="button">
            <i className="fa-solid fa-square-chevron-left fa-lg"></i>
          </div>
          <div className="complete-button-next-release" role="button">
            <i className="fa-solid fa-square-chevron-right fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
