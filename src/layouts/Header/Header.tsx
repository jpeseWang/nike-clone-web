import "./Header.scss";
export const Header = (): JSX.Element => {
  //TODO: Hyzu lam Header
  return (
    <div>
      <div className="header-container">
        {" "}
        <nav>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  );
};
