import { useRef, memo } from 'react'

import { EnumFilter, FilterCommonProps } from '@/@types/common'
import useClickOutside from '@/utils/hooks/useClickOutside'
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

const Language = (props: FilterCommonProps) => {
  const { open, handleOpen } = props
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  useClickOutside({ dropdownRef, handleOpen, open, type: EnumFilter.language })
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      dropdownClassName="c1"
      handleOpen={handleOpen}
      value={EnumFilter.language}
    />
  )
}

export default memo(Language)
