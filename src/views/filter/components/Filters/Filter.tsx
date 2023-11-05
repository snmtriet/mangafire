import React, { useState, useCallback } from 'react'

import { EnumFilter } from '@/@types/common'

import { Genre, Language, Length, Sort, Status, Type, Year } from './components'

type FilterProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Filter = (props: FilterProps) => {
  const { handleSubmit } = props
  const [open, setOpen] = useState<EnumFilter | null>(null)

  const handleOpen = useCallback((type: EnumFilter | null) => {
    setOpen((prev) => (type === null || type === prev ? null : type))
  }, [])

  return (
    <form id="filters" autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            name="keyword"
          />
        </div>
        <Type open={open} handleOpen={handleOpen} />
        <Genre open={open} handleOpen={handleOpen} />
        <Status open={open} handleOpen={handleOpen} />
        <Language open={open} handleOpen={handleOpen} />
        <Year open={open} handleOpen={handleOpen} />
        <Length open={open} handleOpen={handleOpen} />
        <Sort open={open} handleOpen={handleOpen} />
        <div>
          <button type="submit" className="btn btn-primary">
            <i className="fa-regular fa-circles-overlap fa-xs"></i>
            <span>Filter</span> <i className="ml-2 bi bi-intersect"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Filter
