import classNames from 'classnames'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import { setShowSubPanel, useAppDispatch, useAppSelector } from '@/store'

const SubPanelChapter = () => {
  const { isShowSubPanel } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleClosePanel = () => dispatch(setShowSubPanel(null))

  const chapters = [
    {
      number: '63',
      title: 'Popularity and the Rarest Rod',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-63',
    },
    {
      number: '62',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-62',
    },
    {
      number: '61',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-61',
    },
    {
      number: '60',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-60',
    },
    {
      number: '59',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-59',
    },
    {
      number: '58',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-58',
    },
    {
      number: '57',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-57',
    },
    {
      number: '56',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-56',
    },
    {
      number: '55',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-55',
    },
    {
      number: '54',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-54',
    },
    {
      number: '53',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-53',
    },
    {
      number: '52',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-52',
    },
    {
      number: '51',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-51',
    },
    {
      number: '50',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-50',
    },
    {
      number: '49',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-49',
    },
    {
      number: '48',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-48',
    },
    {
      number: '47',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-47',
    },
    {
      number: '46',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-46',
    },
    {
      number: '45',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-45',
    },
    {
      number: '44',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-44',
    },
    {
      number: '43',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-43',
    },
    {
      number: '42',
      title: 'The king and the butt',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-42',
    },
    {
      number: '41',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-41',
    },
    {
      number: '40',
      title: 'I found a small hill',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-40',
    },
    {
      number: '39.5',
      title: 'Self control',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-39.5',
    },
    {
      number: '39',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-39',
    },
    {
      number: '38',
      title: 'Ayatsuri',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-38',
    },
    {
      number: '37',
      title: 'The encounter, the puppy, the lie and kiss',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-37',
    },
    {
      number: '36',
      title: 'A man who can make you cum with only his fingertip',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-36',
    },
    {
      number: '35',
      title: "Getting in and out of trouble · It won't be over",
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-35',
    },
    {
      number: '34',
      title: "Sun & Moon's greed",
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-34',
    },
    {
      number: '33',
      title: 'Fornication is required at the time of contract',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-33',
    },
    {
      number: '32',
      title: "I'm Going, I'm Going",
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-32',
    },
    {
      number: '31',
      title: 'Exotic · Evil · Panties',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-31',
    },
    {
      number: '30',
      title: 'A very natural way to shoot a lot',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-30',
    },
    {
      number: '29',
      title: "It's Overflowing? Where?",
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-29',
    },
    {
      number: '28',
      title: 'Harem Kingdom',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-28',
    },
    {
      number: '27',
      title: 'I seek the power of the lake',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-27',
    },
    {
      number: '26',
      title: 'If We take advantage of you once, then...',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-26',
    },
    {
      number: '25',
      title: "Not my type, but I'll deal with it",
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-25',
    },
    {
      number: '24',
      title: 'If everything has ended, Why am I still soaking wet?',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-24',
    },
    {
      number: '23',
      title: 'I want to feel it together',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-23',
    },
    {
      number: '22',
      title: 'The gate where the Ogre dwells',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-22',
    },
    {
      number: '21',
      title: 'Keep up the slow tempo',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-21',
    },
    {
      number: '20',
      title: 'Expose Your Unprotected Armpits',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-20',
    },
    {
      number: '19',
      title: 'Training - The Night He Asked Me Out',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-19',
    },
    {
      number: '18',
      title: 'Because Of That Perfume',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-18',
    },
    {
      number: '17',
      title: 'Swap Battle',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-17',
    },
    {
      number: '16',
      title: 'Groping Canopies',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-16',
    },
    {
      number: '15',
      title: 'Keep Your Clothes On',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-15',
    },
    {
      number: '14',
      title: 'Absolutely, Really. I Just Want to Sleep Next to You',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-14',
    },
    {
      number: '13',
      title: 'The Betrayal Plot',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-13',
    },
    {
      number: '12',
      title: 'The Room, The Blindfold, And Me',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-12',
    },
    {
      number: '11',
      title: 'Muri, Muri, Yukemuri',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-11',
    },
    {
      number: '10',
      title: 'Mu ▪ Ki ▪ Da ▪ Shi Auction',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-10',
    },
    {
      number: '9',
      title: 'Overflowing Inside',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-9',
    },
    {
      number: '8',
      title: "Here's We're Doing A Surprise Attack",
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-8',
    },
    {
      number: '7',
      title: 'Even Though The Twins Are Sleeping Next To Us',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-7',
    },
    {
      number: '6',
      title: 'On Horseback',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-6',
    },
    {
      number: '5',
      title: 'The Vow Made In A Naked Apron',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-5',
    },
    {
      number: '4',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-4',
    },
    {
      number: '3',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-3',
    },
    {
      number: '2',
      title: '(Decensored)',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-2',
    },
    {
      number: '1',
      title: '',
      link: '/read/uragirareta-s-rank-boukensha-no-ore-wa-aisuru-dorei-no-kanojora-to-tomoni-dorei-dake-no-harem-guild-o-tsukuru.z14z2/en/chapter-1',
    },
  ]

  return (
    <div
      className={classNames(
        'sub-panel scroll-sm',
        isShowSubPanel === SUB_PANEL_ENUM.PANEL_CHAPTER && 'active'
      )}
      id="number-panel"
    >
      <div className="head">
        <form autoComplete="off">
          <div className="form-group">
            <i className="fa-regular fa-magnifying-glass" />
            <input
              type="text"
              className="form-control"
              placeholder="Find number..."
            />
          </div>
        </form>
        <button
          className="close-primary btn btn-secondary1"
          id="number-close"
          onClick={handleClosePanel}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>
            <a
              href={`/read/uragirareta-s-rank-b${chapter.number}`}
              title={chapter.title}
            >
              {chapter.number}. {chapter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubPanelChapter
