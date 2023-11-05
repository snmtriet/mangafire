import classNames from 'classnames'
import { HiChevronLeft } from 'react-icons/hi'
import type { MouseEvent } from 'react'
import { CommonProps } from '@/@types/common'

interface PrevProps extends CommonProps {
  currentPage: number
  pagerClass: {
    default: string
    inactive: string
    active: string
    disabled: string
  }
  onPrev: (e: MouseEvent<HTMLSpanElement>) => void
}

const Prev = (props: PrevProps) => {
  const { currentPage, pagerClass, onPrev } = props

  const disabled = currentPage <= 1

  const onPrevClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (disabled) {
      return
    }
    onPrev(e)
  }

  const pagerPrevClass = classNames(
    pagerClass.default,
    'pagination-pager-prev',
    disabled ? pagerClass.disabled : pagerClass.inactive
  )

  return (
    <span className={pagerPrevClass} role="presentation" onClick={onPrevClick}>
      <HiChevronLeft size={20} />
    </span>
  )
}

export default Prev
