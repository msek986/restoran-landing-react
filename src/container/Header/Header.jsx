import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="header wrapper section__padding" id="home">
    <div className="wrapper_info">
      <SubHeading title="Pronađite nove ukuse" />
      <h1 className="header-h1">Ključ za savršen ukus</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <button type="button" className="custom__button">
        Istražite meni
      </button>
    </div>
    <div className="wrapper_img">
      <img src={images.welcome} alt="img" />
    </div>
  </div>
);

export default Header;
