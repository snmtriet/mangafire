import { Link } from 'react-router-dom'
import { MODAL_AUTH_ENUM } from '@/@types/modal'

type RegisterProps = {
  onOpen: (type: MODAL_AUTH_ENUM) => void
}

const Register = (props: RegisterProps) => {
  const { onOpen } = props
  return (
    <>
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
          onClick={() => onOpen(MODAL_AUTH_ENUM.LOGIN)}
        >
          Login Now
        </Link>
      </div>
    </>
  )
}

export default Register
