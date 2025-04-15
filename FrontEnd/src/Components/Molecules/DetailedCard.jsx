import React from "react"; 
import "../Styles/molecules.css";
import ImageComponent from "../Atoms/ImageComponent";
import Badge from "../Atoms/Badge";
import Typograph from "../Atoms/Typograph";


const DetailedCard = ({
  imageSrc,
  badgeText,
  badgeColor = "red",
  badgeTextColor = "white",
  title,
  amenities,
}) => {
  return (
    <div className="custom-detailed-card">
      
      <div className="detailed-card-cover">
        <div className="img">
        <ImageComponent src={imageSrc} title={title} loading="lazy" type="fullyRounded"  /> </div>
        {badgeText && (
        <div className="badge-over-image">
        <Badge text={badgeText} color={badgeColor} textcolor={badgeTextColor} />
        </div>
        )}
      </div>

      <div className="detailed-card-content">
        <div className="detailed-card-header">
          <div>
            <Typograph variant="p" className="detailed-card-title">{title}</Typograph>
            <div className="detailed-card-amenities">
              {amenities.map((amenity, index) => (
                <div key={index} className="detailed-amenity">
                  {amenity.icon}
                  <Typograph variant="small">{amenity.text}</Typograph>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default DetailedCard;