import { memo, useState } from 'react'

import { EnumFilter } from '@/@types/common'
import { useClickOutside } from '@/utils/hooks'
import ButtonFilter from './ButtonFilter'

const data = [
  {
    id: 'sort-recently_updated',
    value: 'recently_updated',
    label: 'Recently updated',
  },
  {
    id: 'sort-recently_added',
    value: 'recently_added',
    label: 'Recently added',
  },
  {
    id: 'sort-release_date',
    value: 'release_date',
    label: 'Release date',
  },
  {
    id: 'sort-trending',
    value: 'trending',
    label: 'Trending',
  },
  {
    id: 'sort-title_az',
    value: 'title_az',
    label: 'Name A-Z',
  },
  {
    id: 'sort-scores',
    value: 'scores',
    label: 'Scores',
  },
  {
    id: 'sort-mal_scores',
    value: 'mal_scores',
    label: 'MAL scores',
  },
  {
    id: 'sort-most_viewed',
    value: 'most_viewed',
    label: 'Most viewed',
  },
  {
    id: 'sort-most_favourited',
    value: 'most_favourited',
    label: 'Most favourited',
  },
]

const Sort = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setOpen(false))
  const onToggle = () => setOpen((prev) => !prev)
  return (
    <ButtonFilter
      data={data}
      open={open}
      ref={dropdownRef}
      dropdownClassName="c1 dropdown-menu-right dropdown-menu-xs-left"
      onToggle={onToggle}
      value={EnumFilter.sort}
      type="radio"
    />
  )
}

export default memo(Sort)
