import { forwardRef, memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Variants, motion } from 'framer-motion'

import { HeightMotion, ScaleMotion } from '@/utils/motions'
import { useWindowDimensions } from '@/utils/hooks'
import { CommonFilterProps, EnumFilter } from '@/@types/common'

const ButtonFilter = forwardRef<HTMLDivElement, CommonFilterProps>(
  (props, dropdownRef) => {
    const {
      open,
      data,
      value,
      dropdownClassName,
      type = 'checkbox',
      mounted,
      onToggle,
    } = props
    const { width } = useWindowDimensions()
    const isResponsive = [EnumFilter.genre, EnumFilter.year].includes(value)
    const screenMedium = width < 768

    const [animation, setAnimation] = useState<Variants>(HeightMotion)

    useEffect(() => {
      if (screenMedium && isResponsive) setAnimation(ScaleMotion)
      else setAnimation(HeightMotion)
    }, [width])

    return (
      <div ref={dropdownRef}>
        <div
          className={classNames(
            'dropdown',
            open && 'show',
            isResponsive && 'responsive'
          )}
        >
          {isResponsive && <div className="overlay" onClick={onToggle}></div>}
          <button type="button" name={value} onClick={onToggle}>
            <span className="value" style={{ textTransform: 'capitalize' }}>
              {value}
            </span>
          </button>
          <motion.div
            className={classNames(
              'dropdown-menu noclose d-none',
              dropdownClassName,
              mounted && value && 'd-block'
            )}
            animate={open ? 'open' : 'closed'}
            variants={animation}
            style={{
              transformOrigin:
                screenMedium || !isResponsive ? 'top center' : 'top left',
            }}
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
          </motion.div>
        </div>
      </div>
    )
  }
)

ButtonFilter.displayName = 'ButtonFilter'

export default memo(ButtonFilter)
