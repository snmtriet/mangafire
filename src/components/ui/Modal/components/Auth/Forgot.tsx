import { useRef } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { MODAL_AUTH_ENUM } from './Login'

type ForgotProps = {
  modal: MODAL_AUTH_ENUM
  onChange: (type: MODAL_AUTH_ENUM) => void
}

const Forgot = (props: ForgotProps) => {
  const { modal, onChange } = props
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={modal === MODAL_AUTH_ENUM.FORGOT}
      timeout={500}
      classNames="modal-content"
    >
      <div
        ref={nodeRef}
        className={classNames(
          'modal-content p-4 cts-block',
          modal !== MODAL_AUTH_ENUM.FORGOT && 'd-none'
        )}
        data-name="forgot"
      >
        <div
          className="modal-close"
          data-dismiss="modal"
          onClick={() => onChange(MODAL_AUTH_ENUM.CLOSE)}
        >
          <i className="fa-solid fa-xmark" />
        </div>
        <h4 className="text-white">Forgot your password</h4>
        <p className="text-muted">
          We will send an email if your account exists
        </p>
        <div className="ajax mt-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email or Username"
              name="account"
            />
          </div>
          <button className="btn my-3 btn-lg btn-primary w-100">
            Register <i className="fa-solid fa-angle-right" />
          </button>
        </div>
        <div className="text-center">
          Already have an account?{' '}
          <Link
            to="#"
            data-target="signin"
            className="text-primary1 cts-switcher"
            onClick={() => onChange(MODAL_AUTH_ENUM.LOGIN)}
          >
            Login Now
          </Link>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Forgot
