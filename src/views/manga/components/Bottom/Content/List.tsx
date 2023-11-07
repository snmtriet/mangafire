import { Link } from 'react-router-dom'

const data = [
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

const ChapterList = () => {
  return (
    <div className="list-body">
      <ul className="scroll-sm">
        {data.map((item) => (
          <Item
            time={item.time}
            title={item.title}
            key={item.chapNumber}
            chapNumber={item.chapNumber}
          />
        ))}
      </ul>
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
