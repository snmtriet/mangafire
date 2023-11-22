import { memo, useState } from 'react'

import { EnumFilter } from '@/@types/common'
import { useClickOutside } from '@/utils/hooks'
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

const Length = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setOpen(false))
  const onToggle = () => setOpen((prev) => !prev)
  return (
    <ButtonFilter
      data={data}
      open={open}
      type="radio"
      ref={dropdownRef}
      onToggle={onToggle}
      value={EnumFilter.length}
      dropdownClassName="c1"
    />
  )
}

export default memo(Length)
