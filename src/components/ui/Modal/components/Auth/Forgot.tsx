import { Link } from 'react-router-dom'
import { MODAL_AUTH_ENUM } from '@/@types/modal'

type ForgotProps = {
  onOpen: (type: MODAL_AUTH_ENUM) => void
}

const Forgot = (props: ForgotProps) => {
  const { onOpen } = props
  return (
    <>
      <h4 className="text-white">Forgot your password</h4>
      <p className="text-muted">We will send an email if your account exists</p>
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
          onClick={() => onOpen(MODAL_AUTH_ENUM.LOGIN)}
        >
          Login Now
        </Link>
      </div>
    </>
  )
}

export default Forgot
