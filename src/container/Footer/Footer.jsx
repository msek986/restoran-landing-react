import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Kontakt</h1>
        <p className="p__opensans">Kapetan Misina 24, 11000 Beograd</p>
        <p className="p__opensans">+381 60 0066 965</p>
        <p className="p__opensans">+381 11 548 9865</p>
      </div>
      <div className="footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">Posetite nas i oslobodite vaša čula</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer-links_work">
        <h1 className="footer-headtext">Radno vreme</h1>
        <p className="p__opensans">Ponedeljak - Petak</p>
        <p className="p__opensans">10:00 - 24:00</p>
        <p className="p__opensans">Subota - Nedelja</p>
        <p className="p__opensans">10:00 - 01:00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
