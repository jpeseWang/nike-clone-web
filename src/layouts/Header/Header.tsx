import "./Header.scss";
import "./Resonsive.scss"
import nike__logo from "../Assets/img/Logo_NIKE.svg.png";
import dunking from "../Assets/img/Jumpman_logo.svg.png";
export const Header = (): JSX.Element => {
  //TODO: Hyzu lam Header
  const modal1 = document.querySelector('.featured__modal-list__item--title');
  return (
    <div>
      <div className="header-container">
        {" "}
        <nav className="header-navbar">
            <div className="header-navbar__first-layer">

              <div className="header-navbar-img">
                 <img src={dunking} alt="" className="header-navbar__dunking"/>  
              </div>
                <ul className="header-navbar__list">
                  <li className="header-navbar__list-item">Find a store</li>
                  <li className="header-navbar__list-item">Help</li>
                  <li className="header-navbar__list-item">Join us</li>
                  <li className="header-navbar__list-item">
                    Sign in
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="header-navbar__list-item__arrow-right">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </li>
                  
                </ul>
            </div>

            <ul className="header-navbar__list-2">
                <li className="header-navbar__list-2__logo">
                    <img src={nike__logo} alt="" />
                </li>

                <li className="header-navbar__list-2__info">
                    <span className="list-2__info-detail list-2__info-detail--js">New & Featured</span>
                    <span className="list-2__info-detail">Men</span>
                    <span className="list-2__info-detail">Women</span>
                    <span className="list-2__info-detail">Kids</span>
                    <span className="list-2__info-detail">Sale</span>
                    <span className="list-2__info-detail">SNSR</span>
                </li>
                <li className="header-navbar__list-2__icon">
                  <input type="text" className="list-2__search-bar" placeholder="Search"/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="list-2__icon list-2__icon__heart">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="list-2__icon list-2__icon__shopping-bag">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>  
                </li>
                <div className="featured__modal">
                  <div className="featured__modal--overlay"></div>

                  <div className="featured__modal-list--all">
                    <ul className="featured__modal-list">
                      <p className="featured__modal-list__item featured__modal-list__item--title">New & Featured</p>
                      <p className="featured__modal-list__item">New Arrivals</p>
                      <p className="featured__modal-list__item">Latest Shoes</p>
                      <p className="featured__modal-list__item">Latest Clothing</p>
                      <p className="featured__modal-list__item">Customize with Nike By You</p>
                      <p className="featured__modal-list__item">Bestsellers</p>
                      <p className="featured__modal-list__item">Member Eclusive</p>
                      <p className="featured__modal-list__item">National Team Kits</p>
                      <p className="featured__modal-list__item">Top Kicks Under 3,000,000 <span className="featured__modal-list__item--underscored">đ</span></p>
                    </ul>
                    
                    <ul className="featured__modal-list">
                      <p className="featured__modal-list__item featured__modal-list__item--title">Shop Icons</p>
                      <p className="featured__modal-list__item">Air Force 1</p>
                      <p className="featured__modal-list__item">Air Jordan 1</p>
                      <p className="featured__modal-list__item">Air Max</p>
                      <p className="featured__modal-list__item">Dunk</p>
                      <p className="featured__modal-list__item">Blazer</p>
                      <p className="featured__modal-list__item">Pegasus</p>
                    </ul>

                    <ul className="featured__modal-list">
                      <p className="featured__modal-list__item featured__modal-list__item--title">New For Men</p>
                      <p className="featured__modal-list__item">Shoes</p>
                      <p className="featured__modal-list__item">Clothing</p>
                      <p className="featured__modal-list__item">Clothing</p>
                      <p className="featured__modal-list__item">Accessories</p>
                      <p className="featured__modal-list__item">Shop All New</p>
                    </ul>

                    <ul className="featured__modal-list">
                      <p className="featured__modal-list__item featured__modal-list__item--title">New For Women</p>
                      <p className="featured__modal-list__item">Shoes</p>
                      <p className="featured__modal-list__item">Clothing</p>
                      <p className="featured__modal-list__item">Clothing</p>
                      <p className="featured__modal-list__item">Accessories</p>
                      <p className="featured__modal-list__item">Shop All New</p>
                    </ul>

                    <ul className="featured__modal-list">
                      <p className="featured__modal-list__item featured__modal-list__item--title">New For Kids</p>
                      <p className="featured__modal-list__item">Shoes</p>
                      <p className="featured__modal-list__item">Clothing</p>
                      <p className="featured__modal-list__item">Clothing</p>
                      <p className="featured__modal-list__item">Accessories</p>
                      <p className="featured__modal-list__item">Shop All New</p>
                    </ul>
                  </div>
                
              </div>
            </ul>
            <div className="header-navbar__list-3">
              <p className="header-navbar__list-3__style">New Styles on Sale:</p>
              <a href="" className="header-navbar__list-3__link">Up to 40% Off Shop All Our New Markdowns</a>
            </div>
        </nav>
      
      </div>
    </div>
  );
};
