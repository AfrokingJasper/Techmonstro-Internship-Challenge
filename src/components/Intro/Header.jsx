import "./Header.css";
import { Fragment, useState } from "react";

function Header() {
  // the isActive state is used the monitor the navigations and change their active state when either of them is being clicked
  const [isActive, setIsActive] = useState("#");

  return (
    <Fragment>
      {/* header navigation for large screens */}
      <header className="header">
        {/* logo */}
        <div>
          <a href="#landing" className="logo" onClick={() => setIsActive("#")}>
            ChessInfo.
          </a>
        </div>

        {/* navigations */}
        <nav className="navs">
          <ul className="nav__list">
            <li>
              <a
                href="#about"
                onClick={() => setIsActive("#about")}
                className={isActive === "#about" ? "active__nav" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsActive("#gallery")}
                className={isActive === "#gallery" ? "active__nav" : ""}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsActive("#contact")}
                className={isActive === "#contact" ? "active__nav" : ""}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* mobile navigation */}
      <nav className="mobile__navigation">
        <ul className="nav__list-mobile">
          <li>
            <a
              href="#about"
              onClick={() => setIsActive("#about")}
              className={isActive === "#about" ? "active__nav" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={() => setIsActive("#gallery")}
              className={isActive === "#gallery" ? "active__nav" : ""}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsActive("#contact")}
              className={isActive === "#contact" ? "active__nav" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
