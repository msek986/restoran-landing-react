import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Pretplatite se na newsletter</h1>
      <p className="p__opensans">Ne propustite novosti!</p>
    </div>
    <div className="newsletter-input flex__center">
      <input type="email" placeholder="Unesite email adresu" />
      <button type="button" className="custom__button">
        Pretplatite se
      </button>
    </div>
  </div>
);

export default Newsletter;
