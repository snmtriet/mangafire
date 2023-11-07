import React, { useState, useCallback } from 'react'

import { EnumFilter } from '@/@types/common'
import { useMounted } from '@/utils/hooks'
import { Genre, Language, Length, Sort, Status, Type, Year } from './components'

type FilterProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Filter = (props: FilterProps) => {
  const { handleSubmit } = props

  const mounted = useMounted()

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
        <Type mounted={mounted} />
        <Genre mounted={mounted} />
        <Status mounted={mounted} />
        <Language mounted={mounted} />
        <Year mounted={mounted} />
        <Length mounted={mounted} />
        <Sort mounted={mounted} />
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
