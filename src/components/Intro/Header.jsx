import { Link } from "react-router-dom";
import "./Header.css";
import { Fragment, useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState("#");

  return (
    <Fragment>
      <header className="header">
        <div>
          <Link to="/" className="logo" onClick={() => setIsActive("#")}>
            Fortune.
          </Link>
        </div>
        <div className="navs">
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
        </div>
      </header>

      {/* mobile navigation */}
      <nav>
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
