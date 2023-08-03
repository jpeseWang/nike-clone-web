import "./Header.scss";
export const Header = (): JSX.Element => {
  //TODO: Hyzu lam Header
  return (
    <div>
      <div className="header-container">
        {" "}
        <nav className="header-navbar">
            <div className="header-navbar__first-layer">
                <ul className="header-navbar__list">
                  <li className="header-navbar__list-item">Find a store</li>
                  <li className="header-navbar__list-item">Help</li>
                  <li className="header-navbar__list-item">Join us</li>
                  <li className="header-navbar__list-item">
                    Sign in
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="header-navbar__list-item__arrow-right">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </li>
                  
                </ul>
            </div>

            <ul className="header-navbar__list-2">
                <li className="header-navbar__list-2__logo">
                    <img src="./nike_logo.jpeg" alt="" />
                </li>

                <li className="header-navbar__list-2__info">
                    <span className="list-2__info-detail">New & Featured</span>
                    <span className="list-2__info-detail">Men</span>
                    <span className="list-2__info-detail">Women</span>
                    <span className="list-2__info-detail">Kids</span>
                    <span className="list-2__info-detail">Sale</span>
                </li>

                <li className="header-navbar__list-2__icon">
                  <input type="text" className="list-2__search-bar" placeholder="Search"/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="list-2__icon list-2__icon__heart">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="list-2__icon list-2__icon__shopping-bag">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>  

                </li>
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
