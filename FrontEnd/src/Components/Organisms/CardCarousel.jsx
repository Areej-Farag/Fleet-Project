// src/Components/Organisms/CardCarousel.js
import React from "react";
import { Link } from "react-router-dom"; // استيراد Link
import Slider from "react-slick";
import DetailedCard from "../Molecules/DetailedCard";
import "../Styles/organisms.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Images/primary img.png";

const getRandomGovernorates = (governorates, count = 10) => {
  const shuffled = [...governorates].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, governorates.length));
};

const CardCarousel = ({ governorates, sliderRef }) => {
  const randomGovernorates = getRandomGovernorates(governorates, 10);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(randomGovernorates.length, 4),
    slidesToScroll: 1,
    arrows: false,
    ltr: true,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(randomGovernorates.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-carousel">
      {randomGovernorates.length > 0 ? (
        <Slider ref={sliderRef} {...sliderSettings}>
          {randomGovernorates.map((gov, index) => (
            <Link
              key={`${gov.id || gov.gov_id}-${index}`}
              to={`/governate/${gov.id || gov.gov_id}`}
              className="governate-card-link"
            >
              <div className="carousel-card-wrapper">
                <DetailedCard
                  imageSrc={gov.image || img1}
                  title={gov.name}
                  badgeText={`${gov.trips.length} Available Trips`}
                  badgeColor="black"
                  badgeTextColor="white"
                  amenities={[{ text: `${gov.trips.length} trips`, icon: null }]}
                />
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <p className="no-governorates">No Available Cities</p>
      )}
    </div>
  );
};

export default CardCarousel;