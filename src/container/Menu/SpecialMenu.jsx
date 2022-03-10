import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="specialMenu flex__center section__padding" id="menu">
    <div className="specialMenu-title">
      <SubHeading title="Meni koji odgovara vama" />
      <h1 className="headtext__cormorant">Današnji meni</h1>
    </div>
    <div className="specialMenu-menu">
      <div className="specialMenu-menu_wine flex__center">
        <p className="specialMenu-menu_heading">Vino i pivo</p>
        <div className="specialMenu-menu_items">
          {data.wines.map((wine, i) => (
            <MenuItem
              key={wine.title + i}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="specialMenu-menu_cocktails flex__center">
        <p className="specialMenu-menu_heading">Kokteli</p>
        <div className="specialMenu-menu_items">
          {data.cocktails.map((cocktail, i) => (
            <MenuItem
              key={cocktail.title + i}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        Vidite Više
      </button>
    </div>
  </div>
);

export default SpecialMenu;
