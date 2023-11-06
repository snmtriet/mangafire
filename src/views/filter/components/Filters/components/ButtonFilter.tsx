import { forwardRef, memo } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import { CommonFilterProps, EnumFilter } from '@/@types/common'

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
}

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
            onClick={() => handleOpen(EnumFilter.null)}
          ></div>
          <button type="button" name={value} onClick={() => handleOpen(value)}>
            <span className="value" style={{ textTransform: 'capitalize' }}>
              {value}
            </span>
          </button>
          <motion.div
            className={classNames(
              'dropdown-menu noclose d-none',
              dropdownClassName,
              open && value && 'd-block'
            )}
            animate={open === value ? 'open' : 'closed'}
            variants={menu}
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
          </motion.div>
        </div>
      </div>
    )
  }
)

ButtonFilter.displayName = 'ButtonFilter'

export default memo(ButtonFilter)
