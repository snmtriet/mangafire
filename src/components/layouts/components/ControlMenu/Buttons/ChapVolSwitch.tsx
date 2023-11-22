const ChapVolSwitch = () => {
  return (
    <button className="chapvol-switch">
      <div>
        <p>you are reading</p>
        <b>
          by <span className="current-viewtype">chapter</span>
        </b>
      </div>
      <i className="fa-light fa-arrows-rotate"></i>
    </button>
  )
}

export default ChapVolSwitch
