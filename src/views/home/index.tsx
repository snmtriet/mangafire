import {
  Alert,
  MostViewed,
  NewRelease,
  RecentlyUpdated,
  TopTrending,
} from './components'

const Home = () => {
  return (
    <>
      <TopTrending />
      <div className="container">
        <Alert />
        <MostViewed />
        <RecentlyUpdated />
        <NewRelease />
      </div>
    </>
  )
}

export default Home
