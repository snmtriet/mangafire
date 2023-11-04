import classNames from 'classnames'

import { EnumFilter, FilterCommonProps } from '@/@types/common'

const data = [
  {
    id: 'genre-action',
    label: 'Action',
    value: '1',
  },
  {
    id: 'genre-adventure',
    label: 'Adventure',
    value: '78',
  },
  {
    id: 'genre-avant-garde',
    label: 'Avant Garde',
    value: '3',
  },
  {
    id: 'genre-boys-love',
    label: 'Boys Love',
    value: '4',
  },
  {
    id: 'genre-comedy',
    label: 'Comedy',
    value: '5',
  },
  {
    id: 'genre-demons',
    label: 'Demons',
    value: '77',
  },
  {
    id: 'genre-drama',
    label: 'Drama',
    value: '6',
  },
  {
    id: 'genre-ecchi',
    label: 'Ecchi',
    value: '7',
  },
  {
    id: 'genre-fantasy',
    label: 'Fantasy',
    value: '79',
  },
  {
    id: 'genre-girls-love',
    label: 'Girls Love',
    value: '9',
  },
  {
    id: 'genre-gourmet',
    label: 'Gourmet',
    value: '10',
  },
  {
    id: 'genre-harem',
    label: 'Harem',
    value: '11',
  },
  {
    id: 'genre-horror',
    label: 'Horror',
    value: '530',
  },
  {
    id: 'genre-isekai',
    label: 'Isekai',
    value: '13',
  },
  {
    id: 'genre-iyashikei',
    label: 'Iyashikei',
    value: '531',
  },
  {
    id: 'genre-josei',
    label: 'Josei',
    value: '15',
  },
  {
    id: 'genre-kids',
    label: 'Kids',
    value: '532',
  },
  {
    id: 'genre-magic',
    label: 'Magic',
    value: '539',
  },
  {
    id: 'genre-mahou-shoujo',
    label: 'Mahou Shoujo',
    value: '533',
  },
  {
    id: 'genre-martial-arts',
    label: 'Martial Arts',
    value: '534',
  },
  {
    id: 'genre-mecha',
    label: 'Mecha',
    value: '19',
  },
  {
    id: 'genre-military',
    label: 'Military',
    value: '535',
  },
  {
    id: 'genre-music',
    label: 'Music',
    value: '21',
  },
  {
    id: 'genre-mystery',
    label: 'Mystery',
    value: '22',
  },
  {
    id: 'genre-parody',
    label: 'Parody',
    value: '23',
  },
  {
    id: 'genre-psychological',
    label: 'Psychological',
    value: '536',
  },
  {
    id: 'genre-reverse-harem',
    label: 'Reverse Harem',
    value: '25',
  },
  {
    id: 'genre-romance',
    label: 'Romance',
    value: '26',
  },
  {
    id: 'genre-school',
    label: 'School',
    value: '73',
  },
  {
    id: 'genre-sci-fi',
    label: 'Sci-Fi',
    value: '28',
  },
  {
    id: 'genre-seinen',
    label: 'Seinen',
    value: '537',
  },
  {
    id: 'genre-shoujo',
    label: 'Shoujo',
    value: '30',
  },
  {
    id: 'genre-shounen',
    label: 'Shounen',
    value: '31',
  },
  {
    id: 'genre-slice-of-life',
    label: 'Slice of Life',
    value: '538',
  },
  {
    id: 'genre-space',
    label: 'Space',
    value: '33',
  },
  {
    id: 'genre-sports',
    label: 'Sports',
    value: '34',
  },
  {
    id: 'genre-super-power',
    label: 'Super Power',
    value: '75',
  },
  {
    id: 'genre-supernatural',
    label: 'Supernatural',
    value: '76',
  },
  {
    id: 'genre-suspense',
    label: 'Suspense',
    value: '37',
  },
  {
    id: 'genre-thriller',
    label: 'Thriller',
    value: '38',
  },
  {
    id: 'genre-vampire',
    label: 'Vampire',
    value: '39',
  },
]

const Genre = (props: FilterCommonProps) => {
  const { open, handleOpen } = props
  return (
    <div>
      <div
        className={classNames(
          'dropdown responsive',
          open === 'genre' && 'show'
        )}
      >
        <button
          type="button"
          name={EnumFilter.genre}
          data-toggle="dropdown"
          onClick={() => handleOpen(EnumFilter.genre)}
        >
          <span
            className="value"
            data-placeholder="Genre"
            data-label-placement="true"
          >
            Genre
          </span>
        </button>
        <div
          className="dropdown-menu noclose lg c4 dropdown-menu-right dropdown-menu-md-left"
          style={{ display: open === 'genre' ? 'block' : 'none' }}
        >
          <ul className="genres">
            {data.map((genre) => (
              <li key={genre.id}>
                <input
                  type="checkbox"
                  id={genre.id}
                  name="genre[]"
                  value={genre.value}
                />
                <label htmlFor={genre.id}>{genre.label}</label>
              </li>
            ))}
          </ul>
          <div className="clearfix"></div>
          <ul>
            <li className="w-100">
              <input
                type="checkbox"
                id="genre-mode"
                name="genre_mode"
                value="and"
              />
              <label htmlFor="genre-mode" className="text-success">
                Must have all the selected genres
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Genre
