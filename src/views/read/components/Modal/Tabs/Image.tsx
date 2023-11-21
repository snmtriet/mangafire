const Image = () => {
  return (
    <div className="tab-content" data-name="image">
      <div className="mb-2">Image Sizing</div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="image-fit-width"
          name="image_fit_width"
          data-enable-if="this.image_fit_width != 'disabled'"
        />
        <label className="custom-control-label" htmlFor="image-fit-width">
          Contain to width
        </label>
      </div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="image-fit-height"
          name="image_fit_height"
          data-enable-if="this.image_fit_height != 'disabled'"
        />
        <label className="custom-control-label" htmlFor="image-fit-height">
          Contain to height
        </label>
      </div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="stretch-small-pages"
          name="stretch_small_pages"
          data-enable-if="this.image_fit_width == 1 || this.image_fit_height == 1"
        />
        <label className="custom-control-label" htmlFor="stretch-small-pages">
          Stretch small pages
        </label>
      </div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="limit-max-width"
          name="limit_max_width"
          data-enable-if="this.image_fit_width == 1"
        />
        <label className="custom-control-label" htmlFor="limit-max-width">
          Limit max width
        </label>
      </div>
      <div
        className="form-group mb-2"
        data-show-if="this.limit_max_width == 1"
        style={{ display: 'none' }}
      >
        <div className="d-flex  align-items-center">
          <label className="mr-2" htmlFor="limit_max_width_value">
            <span>600</span>px
          </label>
          <input
            type="range"
            className="custom-range form-control-range w-100"
            min={1}
            name="limit_max_width_value"
            data-enable-if="this.image_fit_width == 1 && this.limit_max_width == 1"
            max={3440}
          />
        </div>
      </div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="limit-max-height"
          name="limit_max_height"
          data-enable-if="this.image_fit_height == 1"
        />
        <label className="custom-control-label" htmlFor="limit-max-height">
          Limit max height
        </label>
      </div>
      <div
        className="form-group mb-2"
        data-show-if="this.limit_max_height == 1"
        style={{ display: 'none' }}
      >
        <div className="d-flex align-items-center">
          <label className="mr-2" htmlFor="limit_max_height_value">
            <span>1271</span>px
          </label>
          <input
            type="range"
            className="custom-range form-control-range w-100"
            min={1}
            name="limit_max_height_value"
            data-enable-if="this.image_fit_height == 1 && this.limit_max_height == 1"
            max={1271}
          />
        </div>
      </div>
      <div className="mb-2 mt-4">Image Coloring</div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="greyscale-pages"
          name="greyscale_pages"
        />
        <label className="custom-control-label" htmlFor="greyscale-pages">
          Greyscale pages
        </label>
      </div>
      <div className="custom-control custom-switch mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="dim-pages"
          name="dim_pages"
        />
        <label className="custom-control-label" htmlFor="dim-pages">
          Dim pages
        </label>
      </div>
      <div
        className="form-group mb-2"
        data-show-if="this.dim_pages == 1"
        style={{ display: 'none' }}
      >
        <label htmlFor="dim_pages_value">
          Dimmed by <span>0</span>%
        </label>
        <input
          type="range"
          className="custom-range form-control-range w-100"
          min={0}
          max={100}
          name="dim_pages_value"
        />
      </div>
    </div>
  )
}

export default Image
