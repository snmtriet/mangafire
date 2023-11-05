import { useRef, memo } from 'react'

import { EnumFilter, FilterCommonProps } from '@/@types/common'
import useClickOutside from '@/utils/hooks/useClickOutside'
import ButtonFilter from './ButtonFilter'

const data = [
  {
    id: 'status-completed',
    value: 'completed',
    label: 'Completed',
  },
  {
    id: 'status-releasing',
    value: 'releasing',
    label: 'Releasing',
  },
  {
    id: 'status-on_hiatus',
    value: 'on_hiatus',
    label: 'On Hiatus',
  },
  {
    id: 'status-discontinued',
    value: 'discontinued',
    label: 'Discontinued',
  },
  {
    id: 'status-info',
    value: 'info',
    label: 'Not Yet Published',
  },
]

const Status = (props: FilterCommonProps) => {
  const { open, handleOpen } = props
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  useClickOutside({ dropdownRef, handleOpen, open, type: EnumFilter.status })
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      dropdownClassName="c1"
      handleOpen={handleOpen}
      value={EnumFilter.status}
    />
  )
}

export default memo(Status)
