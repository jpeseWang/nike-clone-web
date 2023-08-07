import background from "../Assets/img/basketball-match.webp"
import jordan__mid from "../Assets/img/Air-jodan-1mid-SE.webp"
import model from "../Assets/img/model.jpeg"
import model_woman from"../Assets/img/modal-woman.webp"
import two_woman from "../Assets/img/Two-girl.webp"
import shoes from "../Assets/img/shoess.webp"
import nigga from "../Assets/img/nigga.webp"
import group from "../Assets/img/group.webp"
import pair_shoes from "../Assets/img/pair_shoes.webp"
import dunking from "../Assets/img/Jumpman_logo.svg.png";
import "./Home.scss"
import "../Assets/Responsive.scss"


export const Home = (): JSX.Element => {
  return (
    <div className="home">
      {/* Tailwind CSS practice */}
      <div className="header-navbar__list-3 pb-2">
        <p className="header-navbar__list-3__style">New Styles on Sale:</p>
        <a href="" className="header-navbar__list-3__link">Up to 40% Off Shop All Our New Markdowns</a>
      </div>
    <div className="gridd wide">
        <div className="home__background">
          <div className="pt-16 pb-6">
              <div className="flex justify-center">
                <img src={dunking} alt="" className="w-24 flex justify-center"/>
              </div>
              <div className="flex justify-center">
                  <p className="pr-7 pt-10 font-medium">New Releases</p>
                  <p className="pr-7 pt-10 font-medium">Jordan Sport</p>
                  <p className="pr-7 pt-10 font-medium">Men</p>
                  <p className="pr-7 pt-10 font-medium">Women</p>
                  <p className="pr-7 pt-10 font-medium">Kids</p>
              </div>
          </div>
          <img src={background} alt="" className="home__background-img" />
        </div>
        <div className="home__luk-al lg:max-w-[100%] lg:mx-0 md:max-w-[75%] md:mx-auto">
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
          <a href="#" className="home__luk-al__arround bordered__shop">
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
            <div className="slider__info max-w-[50%]">
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

          <div className="pt-10">
            <p className="text-xl text-black font-extrabold py-10">DISCOVER JORDAN ESSENTIALS</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <img src={two_woman} alt="" className="" />
                <p className="text-center pt-5">Clothing</p>
              </div>

              <div>
                <img src={shoes} alt="" className="" />
                <p className="text-center pt-5">Shoes</p>
              </div>

              <div>
                <img src={nigga} alt="" className="" />
                <p className="text-center pt-5">Gear</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl text-black font-extrabold py-10 mt-20">DISCOVER JORDAN ESSENTIALS</p>
            <div className="grid grid-cols-2 gap-4">
                <img src={group} alt="" className="" />
                <img src={pair_shoes} alt="" className="" />
            </div>
          </div>

          <div className="pt-20 pb-12 lg:flex lg:justify-center sm:grid sm:grid-cols-2">
              <div className="sm:mx-auto lg:mx-0">
                  <p className="px-8 font-semibold pb-4">Jordan Shoes</p>
                  <p className="px-8">All Jordan Shoes</p>
                  <p className="px-8">New Jordan Shoes</p>
                  <p className="px-8">Jordan Lifestyle</p>
                  <p className="px-8">Jordan Basketball</p>
                  <p className="px-8">Men's Jordan Shoes</p>
                  <p className="px-8">Women's Jordan Shoes</p>
                  <p className="px-8">Kid's Jordan Shoes</p>
              </div>
              <div className="sm:mx-auto lg:mx-0">
                  <p className="px-8 font-semibold pb-4">Jordan Clothing</p>
                  <p className="px-8">All Jordan Clothing</p>
                  <p className="px-8">Top & T-shirts</p>
                  <p className="px-8">Jackets</p>
                  <p className="px-8">Trousers</p>
                  <p className="px-8">Shorts</p>
              </div>
              <div className="sm:mx-auto lg:mx-0 sm:mt-10 lg:mx-0 lg:mt-0">
                  <p className="px-8 font-semibold pb-4">Jordan gear</p>
                  <p className="px-8">All Jordan Accessories</p>
                  <p className="px-8">Backs & Backpacks</p>
                  <p className="px-8">Hats</p>
                  <p className="px-8">Socks</p>
              </div>
              <div className="sm:mx-auto lg:mx-0 sm:mt-10 lg:mx-0 lg:mt-0">
                  <p className="px-8 font-semibold pb-4">Featured</p>
                  <p className="px-8">All Jordan Products</p>
                  <p className="px-8">New Releases</p>
                  <p className="px-8">Women's Jordan</p>
                  <p className="px-8">Kids' Jordan</p>
              </div>
          </div>

        </div>

    </div>
    </div>
  );
};
