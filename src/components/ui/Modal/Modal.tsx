import classNames from 'classnames'
import ReactDOM from 'react-dom'

type ModalProps = {
  className?: string
  children: React.ReactNode
}

const Modal = (props: ModalProps) => {
  const { className, children } = props
  return ReactDOM.createPortal(
    <div className={classNames('modal fade show', classNames(className))}>
      {children}
    </div>,
    document.body
  )
}

export default Modal
