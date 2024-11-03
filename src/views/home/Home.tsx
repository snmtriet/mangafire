import { useEffect } from 'react'
import {
  Alert,
  MostViewed,
  NewRelease,
  RecentlyUpdated,
  TopTrending,
} from './components'

const Home = () => {
  useEffect(() => {
    document.title = 'MangaFire - Read Manga Online Free'
  }, [])
  return (
    <>
      <TopTrending />
      <div className="container">
        {/* <Alert /> */}
        <MostViewed />
        <RecentlyUpdated />
        <NewRelease />
      </div>
    </>
  )
}

export default Home
