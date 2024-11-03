import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'

import TrendingCard from './TrendingCard'

const data = [
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/34/347ddfb359f780e48b8a64d64e816642.jpg',
    title: 'Dragon Ball Super',
    desc: 'Having defeated Boo, Goku is starting to get bored with his life on Earth. His wife, Chi-chi, wants him to get a job, but all he wants to do is train ...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 98 - Vol 20',
    genres: ['Action', 'Comedy', 'Sci-Fi'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/17/172435b2771f398254f945826d169aa0.jpg',
    title: 'Kingdom',
    desc: 'During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 775 - Vol 70',
    genres: ['Action', 'Drama', 'Military'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/51/51360d75d5ffa0cc3234dc79d9c36d26.jpg',
    title: 'Naruto',
    desc: 'Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no o...',
    releasing: 'Completed',
    chapterAndVolume: 'Chap 700 - Vol 72',
    genres: ['Action', 'Shounen', 'Super Power'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg',
    title: 'That Time I Got Reincarnated as a Slime',
    desc: 'It is just another ordinary day for Satoru Mikami. The sun is shining brightly on the streets of Tokyo, and he is in the midst of a discussion with hi...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 112 - Vol 24',
    genres: ['Action', 'Comedy', 'Isekai'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/39/39d5e50ee60f9a775a0376a96abc64ac.jpg',
    title: 'Case Closed',
    desc: 'Hailed as the savior of the Japanese Police Department, high school detective Shinichi Kudou uses a combination of observational skills, critical thin...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 1118 - Vol 103',
    genres: ['Comedy', 'Mystery', 'Romance'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/d8/d8fd48b71ebd5f32a2392b5e71eeb3c6.jpg',
    title: 'Black Clover',
    desc: 'In a world full of magic, Asta—an orphan who is overly loud and energetic—possesses none whatsoever. Despite this, he dreams of becoming the Wizard Ki...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 368 - Vol 35',
    genres: ['Action', 'Comedy', 'Shounen'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/34/342e5665543f76294f6d1ec954356e86.jpg',
    title: 'The Rising of the Shield Hero',
    desc: 'Twenty-year-old otaku Naofumi Iwatani is mysteriously transported to the otherworldly kingdom of Melromarc. Appearing before the King, Naofumi and thr...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 100 - Vol 24',
    genres: ['Action', 'Drama', 'Isekai'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/5e/5e727f402d8f75a168be15447e92dd6d.jpg',
    title: 'One Piece',
    desc: 'Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the exist...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 1097 - Vol 109',
    genres: ['Action', 'Comedy', 'Shounen'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f1/f142ae9e95c0275926c620ac451ae9ed.jpg',
    title: 'Berserk',
    desc: 'Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects an...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 374 - Vol 42',
    genres: ['Action', 'Drama', 'Super Power'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/80/80719de2923370cb8652b78b6c3eedbd.jpg',
    title: 'One-Punch Man',
    desc: 'After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 193 - Vol 28',
    genres: ['Action', 'Comedy', 'Parody'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/34/347ddfb359f780e48b8a64d64e816642.jpg',
    title: 'Dragon Ball Super',
    desc: 'Having defeated Boo, Goku is starting to get bored with his life on Earth. His wife, Chi-chi, wants him to get a job, but all he wants to do is train ...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 98 - Vol 20',
    genres: ['Action', 'Comedy', 'Sci-Fi'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/17/172435b2771f398254f945826d169aa0.jpg',
    title: 'Kingdom',
    desc: 'During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 775 - Vol 70',
    genres: ['Action', 'Drama', 'Military'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/51/51360d75d5ffa0cc3234dc79d9c36d26.jpg',
    title: 'Naruto',
    desc: 'Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no o...',
    releasing: 'Completed',
    chapterAndVolume: 'Chap 700 - Vol 72',
    genres: ['Action', 'Shounen', 'Super Power'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg',
    title: 'That Time I Got Reincarnated as a Slime',
    desc: 'It is just another ordinary day for Satoru Mikami. The sun is shining brightly on the streets of Tokyo, and he is in the midst of a discussion with hi...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 112 - Vol 24',
    genres: ['Action', 'Comedy', 'Isekai'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/39/39d5e50ee60f9a775a0376a96abc64ac.jpg',
    title: 'Case Closed',
    desc: 'Hailed as the savior of the Japanese Police Department, high school detective Shinichi Kudou uses a combination of observational skills, critical thin...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 1118 - Vol 103',
    genres: ['Comedy', 'Mystery', 'Romance'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/d8/d8fd48b71ebd5f32a2392b5e71eeb3c6.jpg',
    title: 'Black Clover',
    desc: 'In a world full of magic, Asta—an orphan who is overly loud and energetic—possesses none whatsoever. Despite this, he dreams of becoming the Wizard Ki...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 368 - Vol 35',
    genres: ['Action', 'Comedy', 'Shounen'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/34/342e5665543f76294f6d1ec954356e86.jpg',
    title: 'The Rising of the Shield Hero',
    desc: 'Twenty-year-old otaku Naofumi Iwatani is mysteriously transported to the otherworldly kingdom of Melromarc. Appearing before the King, Naofumi and thr...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 100 - Vol 24',
    genres: ['Action', 'Drama', 'Isekai'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/5e/5e727f402d8f75a168be15447e92dd6d.jpg',
    title: 'One Piece',
    desc: 'Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the exist...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 1097 - Vol 109',
    genres: ['Action', 'Comedy', 'Shounen'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f1/f142ae9e95c0275926c620ac451ae9ed.jpg',
    title: 'Berserk',
    desc: 'Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects an...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 374 - Vol 42',
    genres: ['Action', 'Drama', 'Super Power'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/80/80719de2923370cb8652b78b6c3eedbd.jpg',
    title: 'One-Punch Man',
    desc: 'After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 193 - Vol 28',
    genres: ['Action', 'Comedy', 'Parody'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/34/347ddfb359f780e48b8a64d64e816642.jpg',
    title: 'Dragon Ball Super',
    desc: 'Having defeated Boo, Goku is starting to get bored with his life on Earth. His wife, Chi-chi, wants him to get a job, but all he wants to do is train ...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 98 - Vol 20',
    genres: ['Action', 'Comedy', 'Sci-Fi'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/1/17/172435b2771f398254f945826d169aa0.jpg',
    title: 'Kingdom',
    desc: 'During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 775 - Vol 70',
    genres: ['Action', 'Drama', 'Military'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/51/51360d75d5ffa0cc3234dc79d9c36d26.jpg',
    title: 'Naruto',
    desc: 'Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no o...',
    releasing: 'Completed',
    chapterAndVolume: 'Chap 700 - Vol 72',
    genres: ['Action', 'Shounen', 'Super Power'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f4/f4b48fcd9c58423b40ade03b3dae5bc4.jpg',
    title: 'That Time I Got Reincarnated as a Slime',
    desc: 'It is just another ordinary day for Satoru Mikami. The sun is shining brightly on the streets of Tokyo, and he is in the midst of a discussion with hi...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 112 - Vol 24',
    genres: ['Action', 'Comedy', 'Isekai'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/39/39d5e50ee60f9a775a0376a96abc64ac.jpg',
    title: 'Case Closed',
    desc: 'Hailed as the savior of the Japanese Police Department, high school detective Shinichi Kudou uses a combination of observational skills, critical thin...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 1118 - Vol 103',
    genres: ['Comedy', 'Mystery', 'Romance'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/d/d8/d8fd48b71ebd5f32a2392b5e71eeb3c6.jpg',
    title: 'Black Clover',
    desc: 'In a world full of magic, Asta—an orphan who is overly loud and energetic—possesses none whatsoever. Despite this, he dreams of becoming the Wizard Ki...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 368 - Vol 35',
    genres: ['Action', 'Comedy', 'Shounen'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/3/34/342e5665543f76294f6d1ec954356e86.jpg',
    title: 'The Rising of the Shield Hero',
    desc: 'Twenty-year-old otaku Naofumi Iwatani is mysteriously transported to the otherworldly kingdom of Melromarc. Appearing before the King, Naofumi and thr...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 100 - Vol 24',
    genres: ['Action', 'Drama', 'Isekai'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/5/5e/5e727f402d8f75a168be15447e92dd6d.jpg',
    title: 'One Piece',
    desc: 'Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the exist...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 1097 - Vol 109',
    genres: ['Action', 'Comedy', 'Shounen'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/f/f1/f142ae9e95c0275926c620ac451ae9ed.jpg',
    title: 'Berserk',
    desc: 'Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects an...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 374 - Vol 42',
    genres: ['Action', 'Drama', 'Super Power'],
  },
  {
    image:
      'https://static.bunnycdn.ru/i/cache/images/8/80/80719de2923370cb8652b78b6c3eedbd.jpg',
    title: 'One-Punch Man',
    desc: 'After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just...',
    releasing: 'Releasing',
    chapterAndVolume: 'Chap 193 - Vol 28',
    genres: ['Action', 'Comedy', 'Parody'],
  },
]

const TopTrending = () => {
  return (
    <div id="top-trending">
      <div className="container">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          loop
          speed={300}
          slidesPerView="auto"
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.trending-button-next',
            prevEl: '.trending-button-prev',
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <TrendingCard item={item} index={index + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="trending-button-next" role="button"></div>
        <div className="trending-button-prev" role="button"></div>
      </div>
    </div>
  )
}

export default TopTrending
