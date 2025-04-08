import React from 'react';
import "../Styles/templates.css";
import Typograph from "../Atoms/Typograph";


const convertToEmbedUrl = (url) => {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
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
