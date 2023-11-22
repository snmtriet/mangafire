import { EnumFilter } from '@/@types/common'
import { useClickOutside } from '@/utils/hooks'
import ButtonFilter from './ButtonFilter'
import { useState } from 'react'

const data = [
  {
    id: 'year-2023',
    value: '2023',
    label: '2023',
  },
  {
    id: 'year-2022',
    value: '2022',
    label: '2022',
  },
  {
    id: 'year-2021',
    value: '2021',
    label: '2021',
  },
  {
    id: 'year-2020',
    value: '2020',
    label: '2020',
  },
  {
    id: 'year-2019',
    value: '2019',
    label: '2019',
  },
  {
    id: 'year-2018',
    value: '2018',
    label: '2018',
  },
  {
    id: 'year-2017',
    value: '2017',
    label: '2017',
  },
  {
    id: 'year-2016',
    value: '2016',
    label: '2016',
  },
  {
    id: 'year-2015',
    value: '2015',
    label: '2015',
  },
  {
    id: 'year-2014',
    value: '2014',
    label: '2014',
  },
  {
    id: 'year-2013',
    value: '2013',
    label: '2013',
  },
  {
    id: 'year-2012',
    value: '2012',
    label: '2012',
  },
  {
    id: 'year-2011',
    value: '2011',
    label: '2011',
  },
  {
    id: 'year-2010',
    value: '2010',
    label: '2010',
  },
  {
    id: 'year-2009',
    value: '2009',
    label: '2009',
  },
  {
    id: 'year-2008',
    value: '2008',
    label: '2008',
  },
  {
    id: 'year-2007',
    value: '2007',
    label: '2007',
  },
  {
    id: 'year-2006',
    value: '2006',
    label: '2006',
  },
  {
    id: 'year-2005',
    value: '2005',
    label: '2005',
  },
  {
    id: 'year-2004',
    value: '2004',
    label: '2004',
  },
  {
    id: 'year-2003',
    value: '2003',
    label: '2003',
  },
  {
    id: 'year-2000s',
    value: '2000s',
    label: '2000s',
  },
  {
    id: 'year-1990s',
    value: '1990s',
    label: '1990s',
  },
  {
    id: 'year-1980s',
    value: '1980s',
    label: '1980s',
  },
  {
    id: 'year-1970s',
    value: '1970s',
    label: '1970s',
  },
  {
    id: 'year-1960s',
    value: '1960s',
    label: '1960s',
  },
  {
    id: 'year-1950s',
    value: '1950s',
    label: '1950s',
  },
  {
    id: 'year-1940s',
    value: '1940s',
    label: '1940s',
  },
  {
    id: 'year-1930s',
    value: '1930s',
    label: '1930s',
  },
]

const Year = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setOpen(false))
  const onToggle = () => setOpen((prev) => !prev)

  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      onToggle={onToggle}
      value={EnumFilter.year}
      dropdownClassName="md c3 dropdown-menu-right dropdown-menu-md-left"
    />
  )
}

export default Year
