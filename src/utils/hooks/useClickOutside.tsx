import { EnumFilter } from '@/@types/common'
import { useEffect } from 'react'

type useClickOutsideProps = {
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>
  handleOpen: (type: EnumFilter) => void
  type: EnumFilter
  open: EnumFilter | null
}

const useClickOutside = (props: useClickOutsideProps) => {
  const { dropdownRef, handleOpen, open, type } = props
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as HTMLDivElement)
    ) {
      open === type && handleOpen(EnumFilter.null)
    }
  }

  useEffect(() => {
    if (open !== type) return
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [type, open])
  return {}
}

export default useClickOutside
