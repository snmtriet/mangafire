import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Forgot from './Forgot'
import Register from './Register'

export enum MODAL_AUTH_ENUM {
  LOGIN = 1,
  REGISTER = 2,
  FORGOT = 3,
  CLOSE = 0,
}

const Login = () => {
  const nodeRef = useRef(null)
  const [modal, setModal] = useState<MODAL_AUTH_ENUM>(MODAL_AUTH_ENUM.LOGIN)

  useEffect(() => {
    let id: NodeJS.Timeout
    if (modal === MODAL_AUTH_ENUM.CLOSE) {
      id = setTimeout(() => {
        setModal(MODAL_AUTH_ENUM.LOGIN)
      }, 300)
    }
    return () => clearTimeout(id)
  }, [modal])

  const handleChange = (type: MODAL_AUTH_ENUM) => setModal(type)

  return (
    <div className="modal-dialog limit-w modal-dialog-centered cts-wrapper">
      <CSSTransition
        nodeRef={nodeRef}
        in={modal === MODAL_AUTH_ENUM.LOGIN}
        timeout={500}
        classNames="modal-content"
      >
        <div
          ref={nodeRef}
          className={classNames(
            'modal-content p-4 cts-block',
            modal !== MODAL_AUTH_ENUM.LOGIN && 'd-none'
          )}
          data-name="signin"
        >
          <div
            className="modal-close"
            data-dismiss="modal"
            onClick={() => handleChange(MODAL_AUTH_ENUM.CLOSE)}
          >
            <i className="fa-solid fa-xmark" />
          </div>
          <h4 className="text-white">Welcome back!</h4>
          <p className="text-muted">Sign in to your account</p>
          <div className="ajax-login mt-2">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email"
                name="username"
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
            <div className="form-group text-center">
              <Link
                to="#"
                className="cts-switcher"
                data-target="forgot"
                onClick={() => handleChange(MODAL_AUTH_ENUM.FORGOT)}
              >
                Forgot Your Password?
              </Link>
            </div>
            <button className="btn my-3 btn-lg btn-primary w-100">
              Login Now <i className="fa-solid fa-angle-right" />
            </button>
          </div>
          <div className="text-center">
            Don't have an account?{' '}
            <Link
              className="text-primary1 cts-switcher"
              to="#"
              data-target="signup"
              onClick={() => handleChange(MODAL_AUTH_ENUM.REGISTER)}
            >
              Register Now
            </Link>
          </div>
        </div>
      </CSSTransition>

      <Register modal={modal} onChange={handleChange} />
      <Forgot modal={modal} onChange={handleChange} />
    </div>
  )
}

export default Login
