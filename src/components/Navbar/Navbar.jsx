import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="p__opensans">
          <a href="#home">Početna</a>
        </li>
        <li className="p__opensans">
          <a href="#about">O nama</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Meni</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Nagrade</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="p__opensans">
          Ulogujte se / Registrujte se
        </a>
        <div />
        <a href="/" className="p__opensans">
          Rezervišite sto
        </a>
      </div>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <>
            <div className="navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay_close"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="navbar-smallscreen-links">
                <li>
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    Početna
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    O nama
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={() => setToggleMenu(false)}>
                    Meni
                  </a>
                </li>
                <li>
                  <a href="#awards" onClick={() => setToggleMenu(false)}>
                    Nagrade
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setToggleMenu(false)}>
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
