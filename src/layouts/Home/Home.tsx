import background from "./img/basketball-match.webp";
import jordan__mid from "./img/Air-jodan-1mid-SE.webp";
import model from "./img/model.jpeg";
import model_woman from "./img/modal-woman.webp";
import "./Home.scss";
export const Home = (): JSX.Element => {
  return (
    <div className="grid home">
      {/* Tailwind CSS practice */}

      <div className="home__background">
        <img src={background} alt="" className="home__background-img" />
      </div>
      <div className="home__luk-al">
        <p className="home__luk-al-text home__luk-al-text--strong home__luk-al-text--small">
          Luka 2
        </p>
        <h2 className="home__luk-al--title">"LUK.AI"</h2>
        <p className="home__luk-al-text">
          This edition is inspired by the revolutionary idea of Luka’s virtual
          counterpart,
        </p>
        <p className="home__luk-al-text">Luk.AI.</p>
        <p className="home__luk-al-text">
          Colors match Luk.AI’s outfit in the digital world while
          glow-in-the-dark elements
        </p>
        <p className="home__luk-al-text">
          keep the look sleek no matter what realm you’re stepping out in.
        </p>
        <a href="" className="home__luk-al__arround bordered__shop">
          Shop
        </a>
      </div>
      <div className="product">
        <div className="product__cover">
          <h2 className="product__spotlight">in the spotlight</h2>
          <div className="product__navigation">
            <span className="product__navigation-shop">Shop</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="product__navigation__arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="product__navigation__arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <div className="product__shoes">
          <div className="product__shoes-each">
            <img
              src={jordan__mid}
              alt=""
              className="product__shoes-each__img"
            />
            <div className="product__shoes-each__info">
              <div className="shoes__info-details">
                <p className="shoes__info-details__type">AIR JODAN 1 MID SE</p>
                <p className="shoes__info-details__price">3,829,000đ</p>
              </div>
              <p className="shoes__info-details__sex">Women's shoes</p>
            </div>
          </div>
          <div className="product__shoes-each">
            <img
              src={jordan__mid}
              alt=""
              className="product__shoes-each__img"
            />
            <div className="product__shoes-each__info">
              <div className="shoes__info-details">
                <p className="shoes__info-details__type">AIR JODAN 1 MID SE</p>
                <p className="shoes__info-details__price">3,829,000đ</p>
              </div>
              <p className="shoes__info-details__sex">Women's shoes</p>
            </div>
          </div>
          <div className="product__shoes-each">
            <img
              src={jordan__mid}
              alt=""
              className="product__shoes-each__img"
            />
            <div className="product__shoes-each__info">
              <div className="shoes__info-details">
                <p className="shoes__info-details__type">AIR JODAN 1 MID SE</p>
                <p className="shoes__info-details__price">3,829,000đ</p>
              </div>
              <p className="shoes__info-details__sex">Women's shoes</p>
            </div>
          </div>
          <div className="product__shoes-each">
            <img
              src={jordan__mid}
              alt=""
              className="product__shoes-each__img"
            />
            <div className="product__shoes-each__info">
              <div className="shoes__info-details">
                <p className="shoes__info-details__type">AIR JODAN 1 MID SE</p>
                <p className="shoes__info-details__price">3,829,000đ</p>
              </div>
              <p className="shoes__info-details__sex">Women's shoes</p>
            </div>
          </div>
          <div className="product__shoes-each">
            <img
              src={jordan__mid}
              alt=""
              className="product__shoes-each__img"
            />
            <div className="product__shoes-each__info">
              <div className="shoes__info-details">
                <p className="shoes__info-details__type">AIR JODAN 1 MID SE</p>
                <p className="shoes__info-details__price">3,829,000đ</p>
              </div>
              <p className="shoes__info-details__sex">Women's shoes</p>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="model">
            <p className="slider__trending">TRENDING</p>
            <img src={model} alt="" />
          </div>
          <div className="slider__info">
            <p className="slider__jordan">Jordan Men</p>
            <h1 className="slider__mvp">MVP COLLECTION</h1>
            <p className="slider__details">
              The Jordan MVP collection has arrived with new rendition of
              timeless classic. Premium in all the right way these pieces
              combine a comfortable feel with eye-catching colors.
            </p>
            <a href="" className="slider__shop bordered__shop">
              SHOP
            </a>
          </div>
        </div>
        <div className="slider">
          <div className="model">
            <p className="slider__trending">THE LATEST</p>
            <img src={model_woman} alt="" />
          </div>
          <div className="slider__info">
            <p className="slider__jordan">Jordan Women</p>
            <h1 className="slider__mvp">WOMEN'S SPORT</h1>
            <p className="slider__details">
              Defy gravity in pieces that are made to move as effortlessly as
              you do
            </p>
            <a href="" className="slider__shop bordered__shop">
              SHOP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
