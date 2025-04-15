
import { useState } from "react";
import Card from "../Molecules/Card";
import Button from "../Atoms/Button";
import "../Styles/organisms.css";
import { AiOutlineCheck } from "react-icons/ai";

const CardSection = ({ trips }) => {
  const [visibleCards, setVisibleCards] = useState(9);

  const staysData = trips.map((trip) => ({
    imageSrc: trip.image,
    title: trip.name,
    totalPrice: trip.price,
    priceNow: trip.discount ? trip.discount : trip.price,
    priceBefore: trip.discount ? trip.price : null,
    rating: trip.rating,
    reviewCount: trip.reviews?.length || 0,
    amenities: trip.features?.length > 0
      ? [
          {
            icon: <AiOutlineCheck style={{ color: "green" ,size:"20px"}} />,
            
            text: trip.features.reduce((shortest, current) =>
              current.length < shortest.length ? current : shortest
            ),
          },
        ]
      : [],
    badgeText: trip.category,
    badgeColor:"white", 
    badgeTextColor: "red",
  }));

  const cardsToShow = staysData.slice(0, visibleCards);

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 6);
  };

  const handleShowLess = () => {
    setVisibleCards(9);
  };

  return (
    <>
      <section className="card-section">
        <div className="cards-wrapper">
          {cardsToShow.map((stay, i) => (
            <div key={i}>
              <Card {...stay} />
            </div>
          ))}
        </div>
      </section>
      <div className="bttn">
        {staysData.length > visibleCards && (
          <div>
            <Button color="trans" size="small" onClick={handleShowMore}>
              Show More
            </Button>
          </div>
        )}
        {visibleCards > 9 && (
          <div>
            <Button color="black" size="small" onClick={handleShowLess}>
              Show Less
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CardSection;