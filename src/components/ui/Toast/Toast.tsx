import classNames from 'classnames'
import { Toast, toast } from 'react-hot-toast'

enum TOAST_STATUS_ENUM {
  info = 'info',
  danger = 'danger',
  success = 'success',
  warning = 'warning',
}

interface ToastProps {
  t?: Toast
  title: string
  status?: TOAST_STATUS_ENUM
}

const Icon = (status: TOAST_STATUS_ENUM | undefined) => {
  switch (status) {
    case TOAST_STATUS_ENUM.info:
      return <i className="fa-solid fa-info-circle" />
    case TOAST_STATUS_ENUM.danger:
      return <i className="fa-solid fa-exclamation-circle" />
    case TOAST_STATUS_ENUM.success:
      return <i className="fa-solid fa-check-circle" />
    case TOAST_STATUS_ENUM.warning:
      return <i className="fa-solid fa-triangle-exclamation" />
    default:
      return <i className="fa-solid fa-info-circle" />
  }
}

const ToastError = (props: ToastProps) => {
  const { t, title, status } = props
  return (
    <div
      className={classNames(
        `alert alert-${status ?? 'info'}`,
        t?.visible ? 'animate-enter' : 'animate-leave'
      )}
    >
      {Icon(status)}
      <span className="mx-2">{title}</span>
      <button
        onClick={() => toast.dismiss(t?.id)}
        type="button"
        className="close"
        data-dismiss="alert"
      >
        <span>×</span>
      </button>
    </div>
  )
}

export default ToastError
