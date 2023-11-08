const ImageFit = () => {
  return (
    <div
      className="btn-options mb-2"
      data-name="image_fit"
      data-show-if="this.image_fit != 'disabled'"
    >
      <div data-value="width" className="d-none">
        <button className="justify-content-between">
          <span>Fit Width</span>
          <i className="fa-light fa-arrows-left-right fa-lg"></i>
        </button>
      </div>
      <div data-value="height" className="d-block">
        <button className="justify-content-between">
          <span>Fit Height</span>
          <i className="fa-light fa-arrows-up-down fa-lg"></i>
        </button>
      </div>
      <div data-value="both" className="d-none">
        <button className="justify-content-between">
          <span>Fit Both</span>
          <i className="fa-light fa-arrows-up-down-left-right fa-lg"></i>
        </button>
      </div>
      <div data-value="none" className="d-none">
        <button className="justify-content-between">
          <span>No Limit</span>
          <i className="fa-light fa-ban fa-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default ImageFit
