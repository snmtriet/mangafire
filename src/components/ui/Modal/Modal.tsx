import { useRef, useEffect } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { isMobile } from 'react-device-detect'
import { useClickOutside } from '@/utils/hooks'

type ModalProps = {
  open: boolean
  className?: string
  children: React.ReactNode
  onClose: () => void
}

const Modal = (props: ModalProps) => {
  const { className, children, open, onClose } = props
  const nodeRef = useRef(null)
  const backdropRef = useRef(null)

  const modalRef = useClickOutside(() => onClose())

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open')
      if (!isMobile) document.body.style.paddingRight = '10px'
    } else {
      document.body.classList.remove('modal-open')
      document.body.removeAttribute('style')
    }
  }, [open])

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={400}
        nodeRef={nodeRef}
        classNames="modal"
      >
        <div
          ref={nodeRef}
          className={classNames('modal', classNames(className))}
        >
          <div className="modal-dialog limit-w modal-dialog-centered">
            <div className="modal-content p-4" ref={modalRef}>
              <div
                className="modal-close"
                data-dismiss="modal"
                onClick={onClose}
              >
                <i className="fa-solid fa-xmark" />
              </div>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={400}
        nodeRef={backdropRef}
        classNames="modal-backdrop"
      >
        <div ref={backdropRef} className="modal-backdrop" />
      </CSSTransition>
    </>,
    document.body
  )
}

export default Modal
