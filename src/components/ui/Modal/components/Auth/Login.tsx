import { Link } from 'react-router-dom'
import { MODAL_AUTH_ENUM } from '@/@types/modal'

type LoginProps = {
  onOpen: (type: MODAL_AUTH_ENUM) => void
}

const Login = (props: LoginProps) => {
  const { onOpen } = props
  return (
    <>
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
            onClick={() => onOpen(MODAL_AUTH_ENUM.FORGOT)}
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
          onClick={() => onOpen(MODAL_AUTH_ENUM.REGISTER)}
        >
          Register Now
        </Link>
      </div>
    </>
  )
}

export default Login
