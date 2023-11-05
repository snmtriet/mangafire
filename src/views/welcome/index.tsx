import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-top">
        <div className="welcome-bg">
          <img src="/index.jpg" />
        </div>
        <div className="container max-md position-relative z-index-2">
          <div className="py-4">
            <h1 className="shadow-sm">
              <b>Read Manga Online For Free.</b>
            </h1>
            <h2 className="shadow-sm">Unveil Your Love for Manga Online.</h2>
            <Link
              className="btn btn-lg shadow-sm text-uppercase btn-primary mt-3"
              to="home"
            >
              <span className="mr-2">Go To Home Page</span>
              <i className="fa-regular fa-arrow-right fa-beat"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="welcome-bottom">
        <div className="container max-md p-0 p-sm-3">
          <div className="bg-secondary shadow-sm">
            <article>
              <div
                className="sharethis-inline-share-buttons mb-3 st-left st-has-labels  st-inline-share-buttons st-animated"
                data-url="https://mangafire.to"
                id="st-1"
              >
                {/* <div className="st-total ">
                  <span className="st-label">10.5k</span>
                  <span className="st-shares">Shares</span>
                </div> */}
                <div
                  className="st-btn st-first"
                  data-network="facebook"
                  style={{ display: 'inline-block' }}
                >
                  <img
                    alt="facebook sharing button"
                    src="https://platform-cdn.sharethis.com/img/facebook.svg"
                  />
                  <span className="st-label">1.7k</span>
                </div>
                <div
                  className="st-btn"
                  data-network="twitter"
                  style={{ display: 'inline-block' }}
                >
                  <img
                    alt="twitter sharing button"
                    src="https://platform-cdn.sharethis.com/img/twitter.svg"
                  />
                  <span className="st-label">1.9k</span>
                </div>
                <div
                  className="st-btn"
                  data-network="messenger"
                  style={{ display: 'inline-block' }}
                >
                  <img
                    alt="messenger sharing button"
                    src="https://platform-cdn.sharethis.com/img/messenger.svg"
                  />
                  <span className="st-label">758</span>
                </div>
                <div
                  className="st-btn"
                  data-network="reddit"
                  style={{ display: 'inline-block' }}
                >
                  <img
                    alt="reddit sharing button"
                    src="https://platform-cdn.sharethis.com/img/reddit.svg"
                  />
                  <span className="st-label">5.1k</span>
                </div>
                <div
                  className="st-btn"
                  data-network="whatsapp"
                  style={{ display: 'inline-block' }}
                >
                  <img
                    alt="whatsapp sharing button"
                    src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
                  />
                  <span className="st-label">752</span>
                </div>
                <div
                  className="st-btn st-last st-hide-label"
                  data-network="telegram"
                  style={{ display: 'inline-block' }}
                >
                  <img
                    alt="telegram sharing button"
                    src="https://platform-cdn.sharethis.com/img/telegram.svg"
                  />
                  <span className="st-label">999</span>
                </div>
              </div>
              <h3 className="sub-heading">
                MangaFire - Read Manga Online Free
              </h3>
              <p>
                Are you looking for a platform to
                <strong>read manga online</strong>? Look no further than our
                website! With over 30,000 titles, we offer an extensive
                collection of manga comics for all readers. Our platform
                provides a user-friendly interface that is easy to navigate and
                explore, so you can quickly find your desired title.
              </p>
              <p>
                We have a vast range of genres and sub-genres, ensuring there is
                something for everyone. From romance to action, we have got it
                all covered. We are always updating our platform with new and
                exciting manga titles, and all our comics are of high-quality
                scans. You'll never be disappointed with the quality of the
                images.
              </p>
              <h5 className="sub-heading">Safe to use</h5>
              <p>
                We understand how annoying it is to deal with pop-up ads and
                unwanted distractions while reading, which is why we have zero
                pop-up ads. Our platform is completely safe to use, and your
                reading experience will not be disrupted by unwanted
                advertisements.
              </p>
              <h5 className="sub-heading">Smart features</h5>
              <p>
                We also offer a smart and convenient sync feature that allows
                you to access your content on both your PC and mobile devices.
                No matter where you are, you can pick up where you left off,
                making reading manga comics even more enjoyable.
              </p>
              <h5 className="sub-heading">Completely free</h5>
              <p>
                Our website is entirely free to use. You don't need to register
                or pay for anything to access our vast collection of manga
                comics. We also provide you with the flexibility to switch
                between dark and light themes to suit your reading preferences.
              </p>
              <p>
                We understand that the structure of our website can be crucial
                to the user experience. That is why we have a well-organized
                structure, breaking down our content into different categories
                to help you find what you're looking for quickly. With our
                customer service team always available to help, you can rest
                assured that we have got you covered.
              </p>
              <p>
                In conclusion, our website offers an extensive collection of
                high-quality manga comics with a user-friendly interface, smart
                features, and zero pop-up ads. We aim to make your manga reading
                experience an enjoyable and hassle-free one, so check us out and
                start exploring our collection today!
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomePage
