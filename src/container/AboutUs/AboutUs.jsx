import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="aboutus bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="aboutus-content flex__center">
      <div className="aboutus-content_about">
        <h1 className="headtext__cormorant">O nama</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          repudiandae quod similique, deserunt ad numquam suscipit vel velit!
          Odit beatae hic aut neque ullam rem sapiente quos similique sequi
          corrupti!
        </p>
        <button type="button" className="custom__button">
          Saznajte više
        </button>
      </div>
      <div className="aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="aboutus-content_history">
        <h1 className="headtext__cormorant">Istorija</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          repudiandae quod similique, deserunt ad numquam suscipit vel velit!
          Odit beatae hic aut neque ullam rem sapiente quos similique sequi
          corrupti!
        </p>
        <button type="button" className="custom__button">
          Saznajte više
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
