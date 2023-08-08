import "./Header.scss";
import "../Assets/Responsive.scss"
import nike__logo from "../Assets/img/Logo_NIKE.svg.png";
import dunking from "../Assets/img/Jumpman_logo.svg.png";
export const Header = (): JSX.Element => {
  //TODO: Hyzu lam Header
  var feature = document.getElementsByClassName("list-2__info-detail--js");

  return (
    <div>
      <div className="header-container">
        {" "}
        <nav className="header-navbar">
            <div className="header-navbar__first-layer">

              <div className="header-navbar-img">
                <a href="./" className="">
                  <img src={dunking} alt="" className="header-navbar__dunking hover:opacity-50"/>  
                </a>
              </div>
                <ul className="header-navbar__list">
                  <li className="header-navbar__list-item">
                    <a href="" className="header-navbar__list-item__linkk">Find a store</a>
                  </li>
                  <li className="header-navbar__list-item">
                    <a href="" className="header-navbar__list-item__link">Help</a>
                  </li>
                  <li className="header-navbar__list-item">
                    <a href="./joinus" className="header-navbar__list-item__link">Join us</a>
                  </li>
                  <li className="header-navbar__list-item">
                    <a href="./login" className="header-navbar__list-item__link">Sign in</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="header-navbar__list-item__arrow-right">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </li>
                  
                </ul>
            </div>

            <ul className="header-navbar__list-2">
                <li className="header-navbar__list-2__logo">
                  <a href="/marketplace" className="hover:opacity-50">
                      <img src={nike__logo} alt="" />
                  </a>
                </li>

                <li className="header-navbar__list-2__info">
                    <span className="list-2__info-detail" id="list-2__info-detail--js">New & Featured</span>
                    <a href="/MenShoes" className="list-2__info-detail">Men</a>
                    <span className="list-2__info-detail">Women</span>
                    <span className="list-2__info-detail">Kids</span>
                    <span className="list-2__info-detail">Sale</span>
                    <span className="list-2__info-detail">SNSR</span>
                </li>
                <li className="header-navbar__list-2__icon">
                  <input type="text" className="list-2__search-bar" placeholder="Search"/>
                  <span className="header-navbar__list-2__icon__span"></span>
                  <a href="" className="header-navbar__list-2__icon__link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="list-2__icon list-2__icon__heart">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </a>
                  <a href="" className="header-navbar__list-2__icon__link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="list-2__icon list-2__icon__shopping-bag">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>  
                  </a>
                  
                </li>
                <div className="featured__modal hidden">
                  <div className="featured__modal--overlay"></div>

                  <div className="featured__modal-list--all">
                      <div className="featured__modal-list">
                        <a href="" className="featured__modal-list__item featured__modal-list__item--title">New & Featured</a>
                        <a href="" className="featured__modal-list__item">New Arrivals</a>
                        <a href="" className="featured__modal-list__item">Latest Shoes</a>
                        <a href="" className="featured__modal-list__item">Latest Clothing</a>
                        <a href="" className="featured__modal-list__item">Customize with Nike By You</a>
                        <a href="" className="featured__modal-list__item">Bestsellers</a>
                        <a href="" className="featured__modal-list__item">Member Eclusive</a>
                        <a href="" className="featured__modal-list__item">National Team Kits</a>
                        <a href="" className="featured__modal-list__item">Top Kicks Under 3,000,000 <span className="featured__modal-list__item--underscored">đ</span></a>
                      </div>
                      
                      <div className="featured__modal-list">
                        <a href="" className="featured__modal-list__item featured__modal-list__item--title">Shop Icons</a>
                        <a href="" className="featured__modal-list__item">Air Force 1</a>
                        <a href="" className="featured__modal-list__item">Air Jordan 1</a>
                        <a href="" className="featured__modal-list__item">Air Max</a>
                        <a href="" className="featured__modal-list__item">Dunk</a>
                        <a href="" className="featured__modal-list__item">Blazer</a>
                        <a href="" className="featured__modal-list__item">Pegasus</a>
                      </div>

                      <div className="featured__modal-list">
                        <a href="" className="featured__modal-list__item featured__modal-list__item--title">New For Men</a>
                        <a href="" className="featured__modal-list__item">Shoes</a>
                        <a href="" className="featured__modal-list__item">Clothing</a>
                        <a href="" className="featured__modal-list__item">Clothing</a>
                        <a href="" className="featured__modal-list__item">Accessories</a>
                        <a href="" className="featured__modal-list__item">Shop All New</a>
                      </div>

                      <div className="featured__modal-list">
                        <a href="" className="featured__modal-list__item featured__modal-list__item--title">New For Women</a>
                        <a href="" className="featured__modal-list__item">Shoes</a>
                        <a href="" className="featured__modal-list__item">Clothing</a>
                        <a href="" className="featured__modal-list__item">Clothing</a>
                        <a href="" className="featured__modal-list__item">Accessories</a>
                        <a href="" className="featured__modal-list__item">Shop All New</a>
                      </div>

                      <div className="featured__modal-list">
                        <a href="" className="featured__modal-list__item featured__modal-list__item--title">New For Kids</a>
                        <a href="" className="featured__modal-list__item">Shoes</a>
                        <a href="" className="featured__modal-list__item">Clothing</a>
                        <a href="" className="featured__modal-list__item">Clothing</a>
                        <a href="" className="featured__modal-list__item">Accessories</a>
                        <a href="" className="featured__modal-list__item">Shop All New</a>
                      </div>
                  </div>
                
              </div>
            </ul>
        </nav>
      
      </div>
    </div>
  );
};
