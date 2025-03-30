import React from "react";
import "../Styles/atoms.css"; // استيراد ملف الـ CSS

const ImageComponent = ({ src, title, type = "fullyRounded", badgeContent }) => {
  const typeClasses = {
    wallpaper: "img-wallpaper",
    topRounded: "img-top-rounded",
    fullyRounded: "img-fully-rounded",
    circular: "img-circular",
  };

  return (
    <div className={`image-container ${typeClasses[type]} position-relative`}>
      {badgeContent && (
        <div className="badge-custom position-absolute top-0 start-0 m-2">
          {badgeContent} 
        </div>
      )}
      <img src={src} alt={title} className="img-fluid" />
    </div>
  );
};

export default ImageComponent;

// <ImageComponent src="https://wallpaperaccess.com/full/696176.jpg" title="Image Title" type="wallpaper" badgeContent={<Badge text="Sale" color="white"/>} />