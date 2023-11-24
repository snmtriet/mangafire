import { ENUM_READ_BY } from '@/@types/common'
import { Poster } from '@/components/shared'
import { Link } from 'react-router-dom'

const dataChapters = [
  {
    title: 'Stupid Survivor !! – Il faut gagner',
    time: 'Nov 05, 2023',
    chapNumber: '241',
  },
  {
    title: 'Stupid Survivor !! - Il faut survivre',
    time: 'Oct 29, 2023',
    chapNumber: '240',
  },
  {
    title: 'Stupid Survivor !!',
    time: 'Oct 25, 2023',
    chapNumber: '239',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (15)',
    time: 'Oct 08, 2023',
    chapNumber: '238',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (14)',
    time: 'Oct 01, 2023',
    chapNumber: '237',
  },
  {
    title: 'Vers le sud',
    time: 'Sep 24, 2023',
    chapNumber: '236',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (13)',
    time: 'Sep 10, 2023',
    chapNumber: '235',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (12)',
    time: 'Sep 04, 2023',
    chapNumber: '234',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (11)',
    time: 'Aug 27, 2023',
    chapNumber: '233',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (10)',
    time: 'Aug 20, 2023',
    chapNumber: '232',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (9)',
    time: 'Aug 06, 2023',
    chapNumber: '231',
  },
  {
    title: 'La bataille du no man´s land de Shinjuku (8)',
    time: 'Jul 31, 2023',
    chapNumber: '230',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku (7)',
    time: 'Jul 16, 2023',
    chapNumber: '229',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku (6)',
    time: 'Jul 09, 2023',
    chapNumber: '228',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku (5)',
    time: 'Jul 02, 2023',
    chapNumber: '227',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku (4)',
    time: 'Jun 18, 2023',
    chapNumber: '226',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku (3)',
    time: 'Jun 11, 2023',
    chapNumber: '225',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku (2)',
    time: 'Jun 01, 2023',
    chapNumber: '224',
  },
  {
    title: 'La bataille du no man’s land de Shinjuku',
    time: 'May 21, 2023',
    chapNumber: '223',
  },
  {
    title: 'Prémices',
    time: 'May 14, 2023',
    chapNumber: '222',
  },
  {
    title: 'Profit et perte',
    time: 'Apr 23, 2023',
    chapNumber: '221',
  },
  {
    title: 'Pris à son propre piège',
    time: 'Apr 16, 2023',
    chapNumber: '220',
  },
  {
    title: 'Bain (4)',
    time: 'Apr 09, 2023',
    chapNumber: '219',
  },
  {
    title: 'Bain (3)',
    time: 'Apr 02, 2023',
    chapNumber: '218',
  },
  {
    title: 'Bain (2)',
    time: 'Mar 19, 2023',
    chapNumber: '217',
  },
  {
    title: 'Bain',
    time: 'Mar 12, 2023',
    chapNumber: '216',
  },
  {
    title: 'Naissance de la matrice (7)',
    time: 'Mar 05, 2023',
    chapNumber: '215',
  },
  {
    title: 'Naissance de la matrice (6)',
    time: 'Feb 26, 2023',
    chapNumber: '214',
  },
  {
    title: 'Naissance de la matrice (5)',
    time: 'Feb 15, 2023',
    chapNumber: '213',
  },
  {
    title: 'Maturation (2)',
    time: 'Feb 15, 2023',
    chapNumber: '212',
  },
  {
    title: 'Chapitre 123',
    time: 'Feb 06, 2023',
    chapNumber: '123',
  },
  {
    title: 'Chapitre 89',
    time: 'Feb 06, 2023',
    chapNumber: '89',
  },
  {
    title: 'Chapitre 88',
    time: 'Feb 06, 2023',
    chapNumber: '88',
  },
  {
    title: 'Chapitre 87',
    time: 'Feb 06, 2023',
    chapNumber: '87',
  },
  {
    title: 'Chapitre 86',
    time: 'Feb 06, 2023',
    chapNumber: '86',
  },
  {
    title: 'Après la pluie',
    time: 'Jan 04, 2023',
    chapNumber: '10',
  },
  {
    title: 'Soul Spirit IV',
    time: 'Jan 04, 2023',
    chapNumber: '9',
  },
  {
    title: 'Soul Spirit III',
    time: 'Jan 04, 2023',
    chapNumber: '8',
  },
  {
    title: 'Soul Spirit II',
    time: 'Jan 04, 2023',
    chapNumber: '7',
  },
  {
    title: 'Soul Spirit I',
    time: 'Jan 04, 2023',
    chapNumber: '6',
  },
  {
    title: 'Le commencement',
    time: 'Jan 04, 2023',
    chapNumber: '5',
  },
  {
    title: 'Steal Beam Girl',
    time: 'Jan 04, 2023',
    chapNumber: '4',
  },
  {
    title: 'Pour moi...',
    time: 'Jan 04, 2023',
    chapNumber: '3',
  },
  {
    title: 'Execution Secrète',
    time: 'Jan 04, 2023',
    chapNumber: '2',
  },
  {
    title: 'Ryomen Sukuna',
    time: 'Jan 04, 2023',
    chapNumber: '1',
  },
]

const dataVolumes = [
  {
    vol: '24',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-24',
    image:
      'http://static.bunnycdn.ru/i/cache/images/e/e5/e556dec6c026262789bb5f26c596be34.jpg',
  },
  {
    vol: '22',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-22',
    image:
      'http://static.bunnycdn.ru/i/cache/images/d/d5/d55c6a254f1452d130cc26b2ddc99a98.jpg',
  },
  {
    vol: '21',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-21',
    image:
      'http://static.bunnycdn.ru/i/cache/images/3/3c/3c9dd375b1c21e4d2c32cc50ec10eef1.jpg',
  },
  {
    vol: '20',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-20',
    image:
      'http://static.bunnycdn.ru/i/cache/images/7/75/75becd9670d8da01197e3babdd6887c7.jpg',
  },
  {
    vol: '19',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-19',
    image:
      'http://static.bunnycdn.ru/i/cache/images/9/9c/9cbd15070dc4072e52be3192d3c6e184.jpg',
  },
  {
    vol: '18',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-18',
    image:
      'http://static.bunnycdn.ru/i/cache/images/9/9c/9cdb7a65422edff7ae77e3d6cc159500.jpg',
  },
  {
    vol: '17',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-17',
    image:
      'http://static.bunnycdn.ru/i/cache/images/1/19/19b8113802b805fe199c14c8babd2e82.jpg',
  },
  {
    vol: '16',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-16',
    image:
      'http://static.bunnycdn.ru/i/cache/images/f/f8/f857d34f7a49c97d085a30121e582187.jpg',
  },
  {
    vol: '15',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-15',
    image:
      'http://static.bunnycdn.ru/i/cache/images/7/70/70f6016388f1d46994cdec8c5e6eaf4e.jpg',
  },
  {
    vol: '14',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-14',
    image:
      'http://static.bunnycdn.ru/i/cache/images/2/29/29a671e4de4c1df5ff725715777dfa84.jpg',
  },
  {
    vol: '13',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-13',
    image:
      'http://static.bunnycdn.ru/i/cache/images/b/b1/b182ff06abea010bb95a48aa658802b0.jpg',
  },
  {
    vol: '12',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-12',
    image:
      'http://static.bunnycdn.ru/i/cache/images/b/b9/b9b5b781498fec723546be7fa5561f3f.jpg',
  },
  {
    vol: '11',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-11',
    image:
      'http://static.bunnycdn.ru/i/cache/images/b/b9/b9b78643a3e27435219b65dc700e1998.jpg',
  },
  {
    vol: '10',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-10',
    image:
      'http://static.bunnycdn.ru/i/cache/images/f/fe/fe8f3cff6ad8e491561bceed33c629d3.jpg',
  },
  {
    vol: '9',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-9',
    image:
      'http://static.bunnycdn.ru/i/cache/images/d/d2/d2c130cecf3e2623a87bd253f8fc1381.jpg',
  },
  {
    vol: '8',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-8',
    image:
      'http://static.bunnycdn.ru/i/cache/images/f/fa/faec0106983940094ab9f9e5516ff225.jpg',
  },
  {
    vol: '7',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-7',
    image:
      'http://static.bunnycdn.ru/i/cache/images/c/c3/c376b55b299e4146601920cfafe0cd52.jpg',
  },
  {
    vol: '6',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-6',
    image:
      'http://static.bunnycdn.ru/i/cache/images/a/ab/abeb4255a48b6a5c7b4b0ad99698c415.jpg',
  },
  {
    vol: '5',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-5',
    image:
      'http://static.bunnycdn.ru/i/cache/images/d/d1/d1c99e2e77a03ecc3bc8ef3b44320596.jpg',
  },
  {
    vol: '4',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-4',
    image:
      'http://static.bunnycdn.ru/i/cache/images/3/3b/3bd17655ec4207dba625092adbbe6c72.jpg',
  },
  {
    vol: '3',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-3',
    image:
      'http://static.bunnycdn.ru/i/cache/images/c/c6/c6977755c818f7df98dd612b5c76fa25.jpg',
  },
  {
    vol: '2',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-2',
    image:
      'http://static.bunnycdn.ru/i/cache/images/5/5b/5b72b4bfc2f358f7ee02b927070e9050.jpg',
  },
  {
    vol: '1',
    link: '/read/jujutsu-kaisen.rl2vm/en/volume-1',
    image:
      'http://static.bunnycdn.ru/i/cache/images/6/60/6020bbc400c03bf65baef0efb6ea1391.jpg',
  },
]

type ChapterListProps = {
  tab: ENUM_READ_BY
}

const ChapterList = (props: ChapterListProps) => {
  const { tab } = props
  return (
    <div className="list-body">
      {tab === ENUM_READ_BY.CHAPTER && (
        <ul className="scroll-sm">
          {dataChapters.map((item) => (
            <Item
              time={item.time}
              title={item.title}
              key={item.chapNumber}
              chapNumber={item.chapNumber}
            />
          ))}
        </ul>
      )}

      {tab === ENUM_READ_BY.VOLUME && (
        <div className="card-md vol-list scroll-sm">
          {dataVolumes.map((item, index) => (
            <div key={index} className="unit item" data-number={item.vol}>
              <Link to="/manga/one-punch-man.oo4">
                <div className="poster">
                  <div>
                    <img
                      src={item.image}
                      alt={item.vol}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span>Vol {item.vol}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ChapterList

type ItemProps = {
  time: string
  chapNumber: string
  title: string
}

function Item(props: ItemProps) {
  const { time, chapNumber, title } = props
  return (
    <li className="item" data-number="241">
      <Link to="/read/jujutsu-kaisen.rl2vm/fr/chapter-241" title={chapNumber}>
        <span>
          Chapter {chapNumber}: {title}
        </span>
        <span>{time}</span>
      </Link>
    </li>
  )
}
