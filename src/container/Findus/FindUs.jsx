import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="bg wrapper section__padding" id="contact">
    <div className="wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Adresa
      </h1>
      <div className="wrapper-content" style={{ marginBottom: "1rem" }}>
        <p className="p__opensans">Kapetan Misina 24, 11000 Beograd</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Radno vreme
        </p>
        <p className="p__opensans">Ponedeljak - Petak: 10:00 - 24:00</p>
        <p className="p__opensans">Subota - Nedelja: 10:00 - 01:00</p>
      </div>
      <button type="button" className="custom__button">
        Kontaktirajte nas
      </button>
    </div>
    <div className="wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
