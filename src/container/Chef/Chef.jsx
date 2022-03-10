import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="bg wrapper section__padding">
    <div className="wrapper_img wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="wrapper_info">
      <SubHeading title="Reč šefa" />
      <h1 className="headtext__cormorant">Ono u šta verujemo</h1>
      <div className="chef-content">
        <div className="chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            officia iusto delectus beatae, eos rem distinctio labore debitis?
            Blanditiis, odit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          deleniti voluptatibus natus reprehenderit saepe, quo sit repellendus
          nobis laudantium quae?
        </p>
      </div>
      <div className="chef-sign">
        <p>Brka Brkić</p>
        <p className="p__opensans">Šef kuhinje</p>
      </div>
    </div>
  </div>
);

export default Chef;
