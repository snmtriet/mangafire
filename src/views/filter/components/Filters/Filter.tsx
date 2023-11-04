import React, { useState } from 'react'

import { Genre, Type } from './components'
import { EnumFilter } from '@/@types/common'

const Filter = () => {
  const [open, setOpen] = useState<EnumFilter | null>(null)
  console.log({ open })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const keyword = formData.get('keyword')
    const type = formData.getAll('type[]')
    console.log({ keyword, type })
  }

  const handleOpen = (type: EnumFilter | null) => {
    setOpen((prev) => (prev === type ? null : type))
  }

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
      </div>
    </form>
  )
}

export default Filter
