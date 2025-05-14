import { useState, useEffect } from "react";
import AnimatedSection from "../Atoms/AnimationSection";
import { Link } from "react-router-dom";
import Card from "../Molecules/Card";
import Button from "../Atoms/Button";
import "../Styles/organisms.css";
import { AiOutlineCheck } from "react-icons/ai";
import { LuLoader } from "react-icons/lu";
import useTripsStore from "../../Reducers/TripsStore";
import { useParams } from "react-router-dom";
/*
const CardSection = () => {
  const [visibleCards, setVisibleCards] = useState(9);
  const { trips , loading, error, fetchTripsByGovernorate } = useTripsStore();
  const { governateId } = useParams(); // Ensure this matches your route param

  // Fetch trips for the governorate when the component mounts or governateId changes
  useEffect(() => {
    if (governateId) {
      console.log("Fetching trips for governorate:", governateId); // Debug
      console.log("Trips Store: ", trips);
      console.log("Trips API: ", TripsApi);
      
      fetchTripsByGovernorate(governateId);
    }
  }, [governateId, fetchTripsByGovernorate]);

  // Map trips to the format expected by the Card component
  const staysData = TripsApi?.map((trip) => ({
    id: trip._id,
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
            icon: <AiOutlineCheck style={{ color: "green", size: "20px" }} />,
            text: trip.features.reduce((shortest, current) =>
              current.length < shortest.length ? current : shortest
            ),
          },
        ]
      : [],
    badgeText: trip.category,
    badgeColor: "white",
    badgeTextColor: "red",
  }));

  const cardsToShow = staysData.slice(0, visibleCards);

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 6);
  };

  const handleShowLess = () => {
    setVisibleCards(9);
  };

  if (loading) return <div>Loading trips...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="card-section">
        <div className="cards-wrapper">
          {cardsToShow.length > 0 ? (
            cardsToShow.map((stay, index) => (
              <AnimatedSection key={stay.id} delay={index * 0.1}>
                <Link to={`/trip/${stay.id}`} className="card-link">
                  <Card {...stay} />
                </Link>
              </AnimatedSection>
            ))
          ) : (
            <div>No trips available for this governorate.</div>
          )}
        </div>
      </section>

      <AnimatedSection delay={0.4}>
        <div className="bttn">
          {staysData.length > visibleCards && (
            <div>
              <Button
                color="trans"
                size="small"
                icon={<LuLoader />}
                iconSize={16}
                iconcolor="var(--icon-color)"
                iconPosition="left"
                onClick={handleShowMore}
              >
                Show More
              </Button>
            </div>
          )}
          {visibleCards > 9 && (
            <div>
              <Button
                color="black"
                size="small"
                icon={<LuLoader />}
                iconSize={16}
                iconcolor="var(--icon-color-black)"
                iconPosition="left"
                onClick={handleShowLess}
              >
                Show Less
              </Button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
};

export default CardSection;*/

const CardSection = ({ trips }) => {
  const [visibleCards, setVisibleCards] = useState(9);

  const staysData = trips.map((trip) => ({
    id: trip._id,
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
          icon: <AiOutlineCheck style={{ color: "green", size: "20px" }} />,
          text: trip.features.reduce((shortest, current) =>
            current.length < shortest.length ? current : shortest
          ),
        },
      ]
      : [],
    badgeText: trip.category,
    badgeColor: "white",
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
          {cardsToShow.map((stay, index) => (
            <AnimatedSection key={stay.id} delay={index * 0.1}>
              <Link to={`/trip/${stay.id}`} className="card-link">\
                {console.log("staystaystaystaystay", stay)}
                <Card {...stay} />
              </Link>
            </AnimatedSection>
          ))}



        </div>
      </section>



      <AnimatedSection delay={0.4}>
        <div className="bttn">
          {staysData.length > visibleCards && (
            <div>
              <Button color="trans" size="small" icon={<LuLoader />} iconSize={16} iconcolor="var(--icon-color)" iconPosition="left" onClick={handleShowMore}>
                Show More
              </Button>
            </div>
          )}
          {visibleCards > 9 && (
            <div>
              <Button color="black" size="small" icon={<LuLoader />} iconSize={16} iconcolor="var(--icon-color-black)" iconPosition="left" onClick={handleShowLess}>
                Show Less
              </Button>
            </div>
          )}
        </div>
      </AnimatedSection>


    </>
  );
};

export default CardSection;