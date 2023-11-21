const Shortcut = () => {
  return (
    <div className="tab-content" data-name="shortcut">
      <div className="mb-2">Keyboard Shortcuts</div>
      <div className="form-group">
        <ul style={{ paddingLeft: 40 }}>
          <li>
            <b>H</b>: Toggle show/hide header.
          </li>
          <li>
            <b>M</b>: Toggle show/hide menu.
          </li>
          <li>
            <b>N</b>: Skip forward a chapter/volume.
          </li>
          <li>
            <b>B</b>: Skip backward a chapter/volume.
          </li>
          <li>
            <b className="fa-solid fa-arrow-right" />: Skip a page, forward in
            LTR or backward in RTL
          </li>
          <li>
            <b className="fa-solid fa-arrow-left" />: Skip a page, backward in
            LTR or forward in RTL.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Shortcut
