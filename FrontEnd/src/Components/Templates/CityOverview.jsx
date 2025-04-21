import React from 'react';
import "../Styles/templates.css";
import Typograph from "../Atoms/Typograph";

const convertToEmbedUrl = (url) => {
  if (!url) return ""; 
  if (url.includes("youtube.com/embed")) return url; 

  if (url.includes("youtu.be")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return "";
};



const CityOverview = ({ description, videoUrl }) => {
  return (
    <section className="city-overview">
      <div className="overview-left">
        <Typograph variant="h5" className="overview-title">CityScape</Typograph>
        <Typograph variant="h5" className="overview-description">
          {description}
        </Typograph>
      </div>

      <div className="overview-right">
        <div className="video-container">
          <iframe
            className="video-iframe"
            src={convertToEmbedUrl(videoUrl)}
            title="City Overview Video"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CityOverview;