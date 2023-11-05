import {  useRef,  memo } from 'react'

import { EnumFilter, FilterCommonProps } from '@/@types/common'
import useClickOutside from '@/utils/hooks/useClickOutside'
import ButtonFilter from './ButtonFilter'

const data = [
  {
    id: 'type-manga',
    value: 'manga',
    label: 'Manga',
  },
  {
    id: 'type-one_shot',
    value: 'one_shot',
    label: 'One-Shot',
  },
  {
    id: 'type-doujinshi',
    value: 'doujinshi',
    label: 'Doujinshi',
  },
  {
    id: 'type-novel',
    value: 'novel',
    label: 'Novel',
  },
  {
    id: 'type-manhwa',
    value: 'manhwa',
    label: 'Manhwa',
  },
  {
    id: 'type-manhua',
    value: 'manhua',
    label: 'Manhua',
  },
]

const Type = (props: FilterCommonProps) => {
  const { open, handleOpen } = props
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useClickOutside({ dropdownRef, handleOpen, open, type: EnumFilter.type })
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      dropdownClassName="c1"
      handleOpen={handleOpen}
      value={EnumFilter.type}
    />
  )
}

export default memo(Type)
