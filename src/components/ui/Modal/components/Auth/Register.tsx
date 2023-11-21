import { useRef } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { MODAL_AUTH_ENUM } from './Login'

type RegisterProps = {
  modal: MODAL_AUTH_ENUM
  onChange: (type: MODAL_AUTH_ENUM) => void
}

const Register = (props: RegisterProps) => {
  const { modal, onChange } = props
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={modal === MODAL_AUTH_ENUM.REGISTER}
      timeout={500}
      classNames="modal-content"
    >
      <div
        ref={nodeRef}
        className={classNames(
          'modal-content p-4 cts-block',
          modal !== MODAL_AUTH_ENUM.REGISTER && 'd-none'
        )}
        data-name="signup"
      >
        <div
          className="modal-close"
          data-dismiss="modal"
          onClick={() => onChange(MODAL_AUTH_ENUM.CLOSE)}
        >
          <i className="fa-solid fa-xmark" />
        </div>
        <h4 className="text-white">Create an account</h4>
        <p className="text-muted">Create an account to enjoy more features</p>
        <div className="ajax-register mt-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your username"
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat Your Password"
              name="password_confirmation"
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
            className="text-primary1 cts-switcher"
            data-target="signin"
            onClick={() => onChange(MODAL_AUTH_ENUM.LOGIN)}
          >
            Login Now
          </Link>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Register
