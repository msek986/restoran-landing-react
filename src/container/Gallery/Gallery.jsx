import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryimages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex__center">
      <div className="gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Galerija</h1>
        <p className="p__opensans" style={{ color: "#AAA", margin: "2rem 0" }}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla odio
          reprehenderit eaque vero a iusto itaque minima porro ea! Reiciendis
          earum voluptate sit eos culpa.{" "}
        </p>
        <button type="button" className="custom__button">
          Pogledajte
        </button>
      </div>
      <div className="gallery-images">
        <div className="gallery-images_container" ref={scrollRef}>
          {galleryimages.map((image, i) => (
            <div key={i} className="gallery-images_card flex__center">
              <img src={image} alt="image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
