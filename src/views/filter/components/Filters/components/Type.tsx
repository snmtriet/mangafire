import classNames from 'classnames'

import { EnumFilter, FilterCommonProps } from '@/@types/common'

const data = [
  {
    id: 'type-manga',
    value: 'manga',
    label: 'Manga',
  },
  {
    id: 'type-one_shot',
    value: 'one_shot',
    label: 'One-Shot',
  },
  {
    id: 'type-doujinshi',
    value: 'doujinshi',
    label: 'Doujinshi',
  },
  {
    id: 'type-novel',
    value: 'novel',
    label: 'Novel',
  },
  {
    id: 'type-manhwa',
    value: 'manhwa',
    label: 'Manhwa',
  },
  {
    id: 'type-manhua',
    value: 'manhua',
    label: 'Manhua',
  },
]

const Type = (props: FilterCommonProps) => {
  const { open, handleOpen } = props
  return (
    <div>
      <div
        className={classNames('dropdown', open === EnumFilter.type && 'show')}
      >
        <button
          type="button"
          name={EnumFilter.type}
          data-toggle="dropdown"
          onClick={() => handleOpen(EnumFilter.type)}
        >
          <span
            className="value"
            data-placeholder="Type"
            data-label-placement="true"
          >
            Type
          </span>
        </button>
        <ul
          className="dropdown-menu noclose c1"
          style={{ display: open === EnumFilter.type ? 'block' : 'none' }}
        >
          {data.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                name="type[]"
                value={item.value}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Type
