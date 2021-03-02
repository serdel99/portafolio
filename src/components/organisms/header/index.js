import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="o-header">
      <h1 className="o-header__title"> SDev </h1>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`hamburger hamburger--squeeze ${
          isMenuOpen ? "is-active" : ""
        }`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    </header>
  );
};

export default Header;
