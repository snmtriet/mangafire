import { memo, useState } from 'react'

import { EnumFilter } from '@/@types/common'
import { useClickOutside } from '@/utils/hooks'
import ButtonFilter from './ButtonFilter'

const data = [
  {
    id: 'lang-en',
    value: 'en',
    label: 'English',
  },
  {
    id: 'lang-fr',
    value: 'fr',
    label: 'French',
  },
  {
    id: 'lang-es',
    value: 'es',
    label: 'Spanish',
  },
  {
    id: 'lang-es-la',
    value: 'es-la',
    label: 'Spanish (LATAM)',
  },
  {
    id: 'lang-pt',
    value: 'pt',
    label: 'Portuguese',
  },
  {
    id: 'lang-pt-br',
    value: 'pt-br',
    label: 'Portuguese (Br)',
  },
  {
    id: 'lang-ja',
    value: 'ja',
    label: 'Japanese',
  },
]

const Language = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setOpen(false))
  const onToggle = () => setOpen((prev) => !prev)
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      onToggle={onToggle}
      value={EnumFilter.language}
      dropdownClassName="c1"
    />
  )
}

export default memo(Language)
