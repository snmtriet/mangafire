import { useRef, memo } from 'react'

import { EnumFilter, FilterCommonProps } from '@/@types/common'
import useClickOutside from '@/utils/hooks/useClickOutside'
import ButtonFilter from './ButtonFilter'

const data = [
  {
    id: 'minchap-1',
    value: '1',
    label: '>= 1 chapters',
  },
  {
    id: 'minchap-3',
    value: '3',
    label: '>= 3 chapters',
  },
  {
    id: 'minchap-5',
    value: '5',
    label: '>= 5 chapters',
  },
  {
    id: 'minchap-10',
    value: '10',
    label: '>= 10 chapters',
  },
  {
    id: 'minchap-20',
    value: '20',
    label: '>= 20 chapters',
  },
  {
    id: 'minchap-30',
    value: '30',
    label: '>= 30 chapters',
  },
  {
    id: 'minchap-50',
    value: '50',
    label: '>= 50 chapters',
  },
]

const Length = (props: FilterCommonProps) => {
  const { open, handleOpen } = props
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  useClickOutside({ dropdownRef, handleOpen, open, type: EnumFilter.length })
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      dropdownClassName="c1"
      handleOpen={handleOpen}
      value={EnumFilter.length}
      type="radio"
    />
  )
}

export default memo(Length)
