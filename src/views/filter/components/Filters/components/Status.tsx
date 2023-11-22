import { memo, useState } from 'react'

import { EnumFilter } from '@/@types/common'
import { useClickOutside } from '@/utils/hooks'
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

const Status = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setOpen(false))
  const onToggle = () => setOpen((prev) => !prev)
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      onToggle={onToggle}
      value={EnumFilter.status}
      dropdownClassName="c1"
    />
  )
}

export default memo(Status)
