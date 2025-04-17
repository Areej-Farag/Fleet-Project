import React from "react";
import "../Styles/templates.css";

const ImageGridTemplate = ({ mainImage, smallImages }) => {
  return (
    <section className="image-grid-template">
      <div className="main-image-container">
        <img src={mainImage} alt="Main View" className="main-image" />
      </div>
      <div className="side-images">
        {smallImages.map((img, index) => (
          <div className="image-wrapper" key={index}>
            <img src={img} alt={`Small ${index + 1}`} className="small-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGridTemplate;
