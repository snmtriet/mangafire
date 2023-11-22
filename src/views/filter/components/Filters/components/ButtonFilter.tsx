import { forwardRef, memo, useRef } from 'react'
import classNames from 'classnames'

import { CommonFilterProps, EnumFilter } from '@/@types/common'
import { CSSTransition } from 'react-transition-group'

const ButtonFilter = forwardRef<HTMLDivElement, CommonFilterProps>(
  (props, dropdownRef) => {
    const {
      open,
      data,
      value,
      dropdownClassName,
      type = 'checkbox',
      onToggle,
    } = props
    const overlayRef = useRef(null)
    const isResponsive = [EnumFilter.genre, EnumFilter.year].includes(value)

    return (
      <div ref={dropdownRef}>
        <div
          className={classNames(
            'dropdown',
            open && 'show',
            isResponsive && 'responsive'
          )}
        >
          <CSSTransition
            mountOnEnter
            unmountOnExit
            timeout={300}
            nodeRef={overlayRef}
            in={isResponsive && open}
            classNames="overlay"
          >
            <div ref={overlayRef} className="overlay" onClick={onToggle}></div>
          </CSSTransition>
          <button type="button" name={value} onClick={onToggle}>
            <span className="value" style={{ textTransform: 'capitalize' }}>
              {value}
            </span>
          </button>
          <CSSTransition
            in={open}
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames="dropdown"
          >
            <div
              className={classNames(
                'dropdown-menu noclose d-block',
                dropdownClassName
              )}
              style={{
                transformOrigin: 'top center',
              }}
            >
              <ul
                className={classNames(value === EnumFilter.genre && 'genres')}
              >
                {data.map((item) => (
                  <li key={item.id}>
                    <input
                      type={type}
                      id={item.id}
                      name={type === 'checkbox' ? `${value}[]` : value}
                      value={item.value}
                      checked={item.checked}
                    />
                    <label htmlFor={item.id}>{item.label}</label>
                  </li>
                ))}
              </ul>
              {open && value === EnumFilter.genre && (
                <>
                  <div className="clearfix"></div>
                  <ul>
                    <li className="w-100">
                      <input
                        type="checkbox"
                        id="genre-mode"
                        name="genre_mode"
                        value="and"
                      />
                      <label htmlFor="genre-mode" className="text-success">
                        Must have all the selected genres
                      </label>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
)

ButtonFilter.displayName = 'ButtonFilter'

export default memo(ButtonFilter)
