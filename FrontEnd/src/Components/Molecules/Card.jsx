import React from "react"; 
import "../Styles/molecules.css";
import ImageComponent from "../Atoms/ImageComponent";
import Badge from "../Atoms/Badge";
import Typograph from "../Atoms/Typograph";
import Line from "../Atoms/Lines";
import Rate from "../Atoms/Rate";
import PriceBox from "../Atoms/PriceBox"; 

const Card = ({
  imageSrc,
  badgeText,
  badgeColor = "red",
  badgeTextColor = "white",
  title,
  totalPrice,
  rating,
  reviewCount,
  priceBefore,
  priceNow,
  amenities,
}) => {
  return (
    <div className="custom-card">
      <div className="card-cover">
        <div className="img">
        <ImageComponent src={imageSrc} title={title} loading="lazy" type="topRounded"  /> </div>
        {badgeText && (
        <div className="badge-over-image">
        <Badge text={badgeText} color={badgeColor} textcolor={badgeTextColor} />
        </div>
        )}
      </div>

      <div className="card-content">
        <div className="card-header">
          <div className="card-title-wrapper">
            <Typograph variant="h5" bold="True" className="card-title">{title}</Typograph>
            </div>
            
            <PriceBox priceBefore={priceBefore} priceNow={priceNow} /> 
        </div>

        <div className="card-amenities">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity">
              {amenity.icon}
              <Typograph variant="small">{amenity.text}</Typograph>
            </div>
          ))}
        </div>

        <Line color="#ddd" width="100%" />

        <div className="card-footer">
          <Typograph variant="p" className="card-total-price">
            <strong>${totalPrice} total</strong> 
          </Typograph>
          
          <Rate rating={rating} reviewCount={reviewCount} />
        </div>
      </div>
    </div>
  );
};

export default Card;
