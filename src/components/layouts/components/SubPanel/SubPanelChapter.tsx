import classNames from 'classnames'
import { isMobile } from 'react-device-detect'
import { useWindowDimensions } from '@/utils/hooks'
import { SUB_PANEL_ENUM } from '@/constants/panel.constant'
import { setShowSubPanel, useAppDispatch, useAppSelector } from '@/store'

const SubPanelChapter = () => {
  const { isShowSubPanel } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  const { height } = useWindowDimensions()

  const handleClosePanel = () => dispatch(setShowSubPanel(null))

  const chapters = [
    {
      number: '242',
      title: 'Foolish Survivor —Flying High',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-242',
    },
    {
      number: '241',
      title: 'Idiot Survivor!! ~Move On Up~',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-241',
    },
    {
      number: '240',
      title: 'Foolish Survivor!! - Live On',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-240',
    },
    {
      number: '239',
      title: 'Foolish Survivor!!',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-239',
    },
    {
      number: '238',
      title:
        'The Decisive Battle in the uninhabited Demon Infested Shinjuku Part 15',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-238',
    },
    {
      number: '237',
      title:
        'The Decisive Battle in the uninhabited Demon Infested Shinjuku 14',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-237',
    },
    {
      number: '236',
      title: 'Go South',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-236',
    },
    {
      number: '235',
      title:
        'The Decisive Battle in the uninhabited Demon Infested Shinjuku 13',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-235',
    },
    {
      number: '234',
      title:
        'The Decisive Battle in the uninhabited Demon Infested Shinjuku 12',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-234',
    },
    {
      number: '233',
      title:
        'The Decisive Battle in the uninhabited Demon Infested Shinjuku 11',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-233',
    },
    {
      number: '232',
      title:
        'The Decisive Battle in the uninhabited Demon Infested Shinjuku 10',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-232',
    },
    {
      number: '231',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 9',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-231',
    },
    {
      number: '230',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-230',
    },
    {
      number: '229',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-229',
    },
    {
      number: '228',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-228',
    },
    {
      number: '227',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-227',
    },
    {
      number: '226',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-226',
    },
    {
      number: '225',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-225',
    },
    {
      number: '224',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-224',
    },
    {
      number: '223',
      title: 'The Decisive Battle in the uninhabited Demon Infested Shinjuku ①',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-223',
    },
    {
      number: '222',
      title: 'Omen',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-222',
    },
    {
      number: '221',
      title: 'Gain and Loss',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-221',
    },
    {
      number: '220',
      title: 'Self-Cleansing & Self Restraint',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-220',
    },
    {
      number: '219',
      title: 'Bath 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-219',
    },
    {
      number: '218',
      title: 'Bath 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-218',
    },
    {
      number: '217',
      title: 'Bath 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-217',
    },
    {
      number: '216',
      title: 'Bath',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-216',
    },
    {
      number: '215',
      title: 'Cursed Womb Under Heaven, Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-215',
    },
    {
      number: '214',
      title: 'Cursed Womb Under Heaven, Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-214',
    },
    {
      number: '213',
      title: 'Cursed Womb: Under Heaven, Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-213',
    },
    {
      number: '212',
      title: 'Rippen 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-212',
    },
    {
      number: '211',
      title: 'Ripen',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-211',
    },
    {
      number: '210',
      title: 'Offering to the Unknown, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-210',
    },
    {
      number: '209',
      title: 'Offering to the Unknow',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-209',
    },
    {
      number: '208',
      title: 'Star and Oil, Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-208',
    },
    {
      number: '207',
      title: 'Star and Oil, Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-207',
    },
    {
      number: '206',
      title: 'Star and Oil, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-206',
    },
    {
      number: '205',
      title: 'Star and Oil',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-205',
    },
    {
      number: '204',
      title: 'Blood and Oil, Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-204',
    },
    {
      number: '203',
      title: 'Blood and Oil, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-203',
    },
    {
      number: '202',
      title: 'Blood and Oil',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-202',
    },
    {
      number: '201',
      title: 'Direct Talks, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-201',
    },
    {
      number: '200',
      title: 'Direct Talks, Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-200',
    },
    {
      number: '199',
      title: 'Resentful Names',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-199',
    },
    {
      number: '198',
      title: 'Sakurajima Colony, Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-198',
    },
    {
      number: '197',
      title: 'Sakurajima Colony, Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-197',
    },
    {
      number: '196',
      title: 'Sakurajima Colony, Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-196',
    },
    {
      number: '195',
      title: 'Sakurajima Colony, Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-195',
    },
    {
      number: '194',
      title: 'Sakurajima Colony, Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-194',
    },
    {
      number: '193',
      title: 'Sakurajima Colony, Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-193',
    },
    {
      number: '192',
      title: 'Sakurajima Colony, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-192',
    },
    {
      number: '191',
      title: 'Sakurajima Colony, Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-191',
    },
    {
      number: '190',
      title: 'Tokyo No. 2 Colony, Part 9',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-190',
    },
    {
      number: '189',
      title: 'Tokyo No. 2 Colony, Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-189',
    },
    {
      number: '188',
      title: 'Tokyo No. 2 Colony, Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-188',
    },
    {
      number: '187',
      title: 'Tokyo No. 2 Colony, Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-187',
    },
    {
      number: '186',
      title: 'Tokyo No. 2 Colony, Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-186',
    },
    {
      number: '185',
      title: 'Bye-bye',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-185',
    },
    {
      number: '184',
      title: 'Tokyo No. 2 Colony, Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-184',
    },
    {
      number: '183',
      title: 'Tokyo No. 2 Colony, Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-183',
    },
    {
      number: '182',
      title: 'Tokyo No. 2 Colony, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-182',
    },
    {
      number: '181',
      title: 'Tokyo No. 2 Colony, Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-181',
    },
    {
      number: '180',
      title: 'Sendai Colony, Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-180',
    },
    {
      number: '179',
      title: 'Sendai Colony, Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-179',
    },
    {
      number: '178',
      title: 'Sendai Colony, Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-178',
    },
    {
      number: '177',
      title: 'Sendai Colony, Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-177',
    },
    {
      number: '176',
      title: 'Sendai Colony, Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-176',
    },
    {
      number: '175',
      title: 'Sendai Colony, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-175',
    },
    {
      number: '174',
      title: 'Sendai Colony, Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-174',
    },
    {
      number: '173',
      title: 'Tokyo No. 1 Colony, Part 13',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-173',
    },
    {
      number: '172',
      title: 'Tokyo No. 1 Colony, Part 12',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-172',
    },
    {
      number: '171',
      title: 'Tokyo No.1 Colony: Angry man, Part 11',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-171',
    },
    {
      number: '170',
      title: 'Tokyo No.1 Colony: Angry man, Part 10',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-170',
    },
    {
      number: '169',
      title: 'Tokyo No.1 Colony: Angry man, Part 9',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-169',
    },
    {
      number: '168',
      title: 'Tokyo No.1 Colony: Angry man, Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-168',
    },
    {
      number: '167',
      title: 'Tokyo No.1 Colony: Angry man, Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-167',
    },
    {
      number: '166',
      title: 'Tokyo No.1 Colony: Angry man, Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-166',
    },
    {
      number: '165',
      title: 'Tokyo No.1 Colony: Angry man, Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-165',
    },
    {
      number: '164',
      title: 'Tokyo No.1 Colony: Angry man, Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-164',
    },
    {
      number: '163',
      title: 'Tokyo No.1 Colony: Angry man, Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-163',
    },
    {
      number: '162',
      title: 'Tokyo No.1 Colony: Angry man, Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-162',
    },
    {
      number: '161',
      title: 'Tokyo No.1 Colony, Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-161',
    },
    {
      number: '160',
      title: 'Colony',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-160',
    },
    {
      number: '159',
      title: 'Judgment',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-159',
    },
    {
      number: '158',
      title: 'Kogane',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-158',
    },
    {
      number: '157',
      title: 'Cog',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-157',
    },
    {
      number: '156',
      title: 'Twinkling Stars',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-156',
    },
    {
      number: '155',
      title: 'Fever',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-155',
    },
    {
      number: '154',
      title: 'Infliltration',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-154',
    },
    {
      number: '153',
      title: 'Gambling Match',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-153',
    },
    {
      number: '152',
      title: 'Perfect Preparation, Epilogue',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-152',
    },
    {
      number: '151',
      title: 'Perfect Preparation Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-151',
    },
    {
      number: '150',
      title: 'Perfect Preparation Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-150',
    },
    {
      number: '149',
      title: 'Perfect Preparation Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-149',
    },
    {
      number: '148',
      title: 'Perfect Preparation Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-148',
    },
    {
      number: '147',
      title: 'Even Pandas',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-147',
    },
    {
      number: '146',
      title: 'About the Culling Game',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-146',
    },
    {
      number: '145',
      title: 'The Back',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-145',
    },
    {
      number: '144',
      title: 'That Place',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-144',
    },
    {
      number: '143',
      title: 'One More Time',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-143',
    },
    {
      number: '142',
      title: "A Big Brother's Back",
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-142',
    },
    {
      number: '141',
      title: 'The Front of the Back',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-141',
    },
    {
      number: '140',
      title: 'Execution',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-140',
    },
    {
      number: '139',
      title: 'Hunter',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-139',
    },
    {
      number: '138',
      title: "Zen'in Clan",
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-138',
    },
    {
      number: '137',
      title: 'Hard and White',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-137',
    },
    {
      number: '136',
      title: 'The Shibuya Incident Part 53',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-136',
    },
    {
      number: '135',
      title: 'The Shibuya Incident Part 52',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-135',
    },
    {
      number: '134',
      title: 'The Shibuya Incident Part 51',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-134',
    },
    {
      number: '133',
      title: 'The Shibuya Incident Part 50',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-133',
    },
    {
      number: '132',
      title: 'The Shibuya Incident Part 49',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-132',
    },
    {
      number: '131',
      title: 'The Shibuya Incident Part 48',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-131',
    },
    {
      number: '130',
      title: 'The Shibuya Incident Part 47',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-130',
    },
    {
      number: '129',
      title: 'The Shibuya Incident Part 46',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-129',
    },
    {
      number: '128',
      title: 'The Shibuya Incident Part 45',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-128',
    },
    {
      number: '127',
      title: 'The Shibuya Incident Part 44',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-127',
    },
    {
      number: '126',
      title: 'The Shibuya Incident Part 43',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-126',
    },
    {
      number: '125',
      title: 'A Story About That Girl',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-125',
    },
    {
      number: '124',
      title: 'The Shibuya Incident Part 42',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-124',
    },
    {
      number: '123',
      title: 'The Shibuya Incident Part 41',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-123',
    },
    {
      number: '122',
      title: 'The Shibuya Incident Part 40',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-122',
    },
    {
      number: '121',
      title: 'The Shibuya Incident Part 39',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-121',
    },
    {
      number: '120',
      title: 'The Shibuya Incident Part 38',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-120',
    },
    {
      number: '119',
      title: 'The Shibuya Incident Part 37',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-119',
    },
    {
      number: '118',
      title: 'The Shibuya Incident Part 36',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-118',
    },
    {
      number: '117',
      title: 'The Shibuya Incident Part 35',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-117',
    },
    {
      number: '116',
      title: 'The Shibuya Incident Part 34',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-116',
    },
    {
      number: '115',
      title: 'The Shibuya Incident Part 33',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-115',
    },
    {
      number: '114',
      title: 'The Shibuya Incident Part 32',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-114',
    },
    {
      number: '113',
      title: 'The Shibuya Incident Part 31',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-113',
    },
    {
      number: '112',
      title: 'The Shibuya Incident Part 30',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-112',
    },
    {
      number: '111',
      title: 'The Shibuya Incident Part 29',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-111',
    },
    {
      number: '110',
      title: 'The Shibuya Incident Part 28',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-110',
    },
    {
      number: '109',
      title: 'The Shibuya Incident Part 27',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-109',
    },
    {
      number: '108',
      title: 'The Shibuya Incident Part 26',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-108',
    },
    {
      number: '107',
      title: 'The Shibuya Incident Part 25',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-107',
    },
    {
      number: '106.5',
      title: 'Extra',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-106.5',
    },
    {
      number: '106',
      title: 'The Shibuya Incident Part 24',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-106',
    },
    {
      number: '105',
      title: 'The Shibuya Incident Part 23',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-105',
    },
    {
      number: '104',
      title: 'The Shibuya Incident Part 22',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-104',
    },
    {
      number: '103',
      title: 'The Shibuya Incident Part 21',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-103',
    },
    {
      number: '102',
      title: 'The Shibuya Incident Part 20',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-102',
    },
    {
      number: '101',
      title: 'The Shibuya Incident Part 19',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-101',
    },
    {
      number: '100',
      title: 'The Shibuya Incident Part 18',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-100',
    },
    {
      number: '99',
      title: 'The Shibuya Incident Part 17',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-99',
    },
    {
      number: '98',
      title: 'The Shibuya Incident Part 16',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-98',
    },
    {
      number: '97',
      title: 'The Shibuya Incident Part 15',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-97',
    },
    {
      number: '96',
      title: 'The Shibuya Incident Part 14',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-96',
    },
    {
      number: '95',
      title: 'The Shibuya Incident Part 13',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-95',
    },
    {
      number: '94',
      title: 'The Shibuya Incident Part 12',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-94',
    },
    {
      number: '93',
      title: 'The Shibuya Incident Part 11',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-93',
    },
    {
      number: '92',
      title: 'The Shibuya Incident Part 10',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-92',
    },
    {
      number: '91',
      title: 'The Shibuya Incident Part 9',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-91',
    },
    {
      number: '90',
      title: 'The Shibuya Incident Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-90',
    },
    {
      number: '89',
      title: 'The Shibuya Incident Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-89',
    },
    {
      number: '88.5',
      title: 'Extra',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-88.5',
    },
    {
      number: '88',
      title: 'The Shibuya Incident Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-88',
    },
    {
      number: '87',
      title: 'The Shibuya Incident Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-87',
    },
    {
      number: '86',
      title: 'The Shibuya Incident Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-86',
    },
    {
      number: '85',
      title: 'The Shibuya Incident Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-85',
    },
    {
      number: '84',
      title: 'The Shibuya Incident Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-84',
    },
    {
      number: '83',
      title: 'The Shibuya Incident Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-83',
    },
    {
      number: '82',
      title: 'Evening Festival Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-82',
    },
    {
      number: '81',
      title: 'Evening Festival Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-81',
    },
    {
      number: '80',
      title: 'Evening Festival Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-80',
    },
    {
      number: '79',
      title: 'A Taste of Things to Come',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-79',
    },
    {
      number: '78',
      title: 'Premature Death Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-78',
    },
    {
      number: '77',
      title: 'Premature Death Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-77',
    },
    {
      number: '76',
      title: 'Premature Death Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-76',
    },
    {
      number: '75',
      title: 'Hidden Inventory Part 11',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-75',
    },
    {
      number: '74',
      title: 'Hidden Inventory Part 10',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-74',
    },
    {
      number: '73',
      title: 'Hidden Inventory Part 9',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-73',
    },
    {
      number: '72',
      title: 'Hidden Inventory Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-72',
    },
    {
      number: '71',
      title: 'Hidden Inventory Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-71',
    },
    {
      number: '70',
      title: 'Hidden Inventory Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-70',
    },
    {
      number: '69',
      title: 'Hidden Inventory Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-69',
    },
    {
      number: '68',
      title: 'Hidden Inventory Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-68',
    },
    {
      number: '67',
      title: 'Hidden Inventory Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-67',
    },
    {
      number: '66',
      title: 'Hidden Inventory Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-66',
    },
    {
      number: '65',
      title: 'Hidden Inventory Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-65',
    },
    {
      number: '64',
      title: "It's Like That",
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-64',
    },
    {
      number: '63',
      title: 'Accomplices',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-63',
    },
    {
      number: '62',
      title: 'The Origin of Obedience Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-62',
    },
    {
      number: '61',
      title: 'The Origin of Obedience Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-61',
    },
    {
      number: '60',
      title: 'The Origin of Obedience Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-60',
    },
    {
      number: '59',
      title: 'The Origin of Obedience Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-59',
    },
    {
      number: '58',
      title: 'The Origin of Obedience Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-58',
    },
    {
      number: '57',
      title: 'The Origin of Obedience Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-57',
    },
    {
      number: '56',
      title: 'The Origin of Obedience Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-56',
    },
    {
      number: '55',
      title: 'The Origin of Obedience Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-55',
    },
    {
      number: '54',
      title: 'Jujutsu Koshien',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-54',
    },
    {
      number: '53',
      title: 'Completion',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-53',
    },
    {
      number: '52',
      title: 'Non-Standard',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-52',
    },
    {
      number: '51',
      title: 'Flower',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-51',
    },
    {
      number: '50',
      title: 'Premonition',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-50',
    },
    {
      number: '49',
      title: 'Constrained',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-49',
    },
    {
      number: '48',
      title: 'Black Flash',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-48',
    },
    {
      number: '47',
      title: 'Cursed Tool',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-47',
    },
    {
      number: '46',
      title: 'Time',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-46',
    },
    {
      number: '45',
      title: 'Wise Man',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-45',
    },
    {
      number: '44',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 11',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-44',
    },
    {
      number: '43',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 10',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-43',
    },
    {
      number: '42',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 9',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-42',
    },
    {
      number: '41',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 8',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-41',
    },
    {
      number: '40',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 7',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-40',
    },
    {
      number: '39',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-39',
    },
    {
      number: '38',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-38',
    },
    {
      number: '37',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-37',
    },
    {
      number: '36',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-36',
    },
    {
      number: '35',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-35',
    },
    {
      number: '34.5',
      title: 'Extra',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-34.5',
    },
    {
      number: '34',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-34',
    },
    {
      number: '33',
      title: 'Kyoto Sister School Goodwill Event - Team Battle Part 0',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-33',
    },
    {
      number: '32',
      title: 'Introspection',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-32',
    },
    {
      number: '31',
      title: 'Tomorrow',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-31',
    },
    {
      number: '30',
      title: 'Selfishness',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-30',
    },
    {
      number: '29',
      title: 'Growth',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-29',
    },
    {
      number: '28',
      title: "I'm Gonna Kill You!",
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-28',
    },
    {
      number: '27',
      title: 'What If',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-27',
    },
    {
      number: '26',
      title: 'To You Someday',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-26',
    },
    {
      number: '25.5',
      title: 'Freebie',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-25.5',
    },
    {
      number: '25',
      title: 'Narrow Minded Foolishness',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-25',
    },
    {
      number: '24',
      title: 'Young Fish and Reverse Punishment Part 6',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-24',
    },
    {
      number: '23',
      title: 'Young Fish and Reverse Punishment Part 5',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-23',
    },
    {
      number: '22',
      title: 'Young Fish and Reverse Punishment Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-22',
    },
    {
      number: '21',
      title: 'Young Fish and Reverse Punishment Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-21',
    },
    {
      number: '20',
      title: 'Young Fish and Reverse Punishment Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-20',
    },
    {
      number: '19',
      title: 'Young Fish and Reverse Punishment Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-19',
    },
    {
      number: '18',
      title: 'Low Class',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-18',
    },
    {
      number: '17',
      title: 'Boredom',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-17',
    },
    {
      number: '16.5',
      title: 'Extra',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-16.5',
    },
    {
      number: '16',
      title: 'Compassion',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-16',
    },
    {
      number: '15',
      title: 'Expansion',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-15',
    },
    {
      number: '14',
      title: 'A Sudden Attack',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-14',
    },
    {
      number: '13',
      title: 'Movie Appreciation',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-13',
    },
    {
      number: '12',
      title: 'Pushing Forward',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-12',
    },
    {
      number: '11',
      title: 'A Dream',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-11',
    },
    {
      number: '10',
      title: 'After the Rain',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-10',
    },
    {
      number: '9',
      title: 'Fearsome Womb Part 4',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-9',
    },
    {
      number: '8',
      title: 'Fearsome Womb Part 3',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-8',
    },
    {
      number: '7',
      title: 'Fearsome Womb Part 2',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-7',
    },
    {
      number: '6',
      title: 'Fearsome Womb Part 1',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-6',
    },
    {
      number: '5',
      title: 'Beginning',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-5',
    },
    {
      number: '4',
      title: 'Steel Beam Girl',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-4',
    },
    {
      number: '3',
      title: 'For Myself',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-3',
    },
    {
      number: '2',
      title: 'Secret Execution',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-2',
    },
    {
      number: '1',
      title: 'Ryomen Sukuna',
      link: '/read/jujutsu-kaisen.rl2vm/en/chapter-1',
    },
  ]

  return (
    <div
      className={classNames(
        'sub-panel scroll-sm',
        isShowSubPanel === SUB_PANEL_ENUM.PANEL_CHAPTER && 'active'
      )}
      id="number-panel"
      style={isMobile ? { maxHeight: height, position: 'fixed' } : {}}
      onDoubleClick={(e) => e.stopPropagation()}
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
              className={classNames(index === 0 && 'active')}
            >
              <span>
                {chapter.number}. {chapter.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubPanelChapter
