import { forwardRef, memo } from 'react'
import classNames from 'classnames'

import { CommonFilterProps, EnumFilter } from '@/@types/common'

const ButtonFilter = forwardRef<HTMLDivElement, CommonFilterProps>(
  (props, dropdownRef) => {
    const {
      open,
      data,
      value,
      handleOpen,
      dropdownClassName,
      type = 'checkbox',
    } = props

    const isResponsive = [EnumFilter.genre, EnumFilter.year].includes(value)
    return (
      <div>
        <div
          className={classNames(
            'dropdown',
            isResponsive && 'responsive',
            open === value && 'show'
          )}
          ref={dropdownRef}
        >
          <div
            className="overlay"
            style={{
              display: isResponsive ? 'block' : 'none',
            }}
            onClick={() => handleOpen(null)}
          ></div>
          <button type="button" name={value} onClick={() => handleOpen(value)}>
            <span className="value" style={{ textTransform: 'capitalize' }}>
              {value}
            </span>
          </button>
          <div
            className={classNames('dropdown-menu noclose', dropdownClassName)}
            style={{ display: open === value ? 'block' : 'none' }}
          >
            <ul className={classNames(value === EnumFilter.genre && 'genres')}>
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
            {open === EnumFilter.genre && value === EnumFilter.genre && (
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
        </div>
      </div>
    )
  }
)

ButtonFilter.displayName = 'ButtonFilter'

export default memo(ButtonFilter)
