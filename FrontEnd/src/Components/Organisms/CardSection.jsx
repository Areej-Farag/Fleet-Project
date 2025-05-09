// src/Components/Organisms/CardSection.js
import { useState, useEffect } from "react";
import AnimatedSection from "../Atoms/AnimationSection";
import { Link } from "react-router-dom";
import Card from "../Molecules/Card";
import Button from "../Atoms/Button";
import "../Styles/organisms.css";
import Typograph from "../Atoms/Typograph";
import { AiOutlineCheck } from "react-icons/ai";
import { LuLoader } from "react-icons/lu";
import useTripsStore from "../../Reducers/TripsStore";
import { useParams } from "react-router-dom";

const CardSection = () => {
  const { trips, loading, error, totalPages, currentPage, fetchTripsByGovernorate, fetchPaginatedTrips, fetchSortedTrips } = useTripsStore();
  const { governateId } = useParams();
  const [sortBy, setSortBy] = useState("Recently Added");

  useEffect(() => {
    if (governateId) {
      fetchTripsByGovernorate(governateId, currentPage);
    } else {
      if (sortBy === "Recently Added") {
        fetchPaginatedTrips(currentPage);
      } else {
        fetchSortedTrips(sortBy, currentPage);
      }
    }
  }, [governateId, currentPage, sortBy, fetchTripsByGovernorate, fetchPaginatedTrips, fetchSortedTrips]);

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

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      useTripsStore.setState({ currentPage: newPage });
    }
  };

  if (loading) return <div>Loading trips...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="card-section">
        <div className="sort-controls">
          <Typograph variant="h6">Sort by:</Typograph>
          <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="Recently Added">Recently Added</option>
            <option value="Rating">Rating</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
          </select>
        </div>
        <div className="cards-wrapper">
          {staysData.map((stay, index) => (
            <AnimatedSection key={stay.id} delay={index * 0.1}>
              <Link to={`/trip/${stay.id}`} className="card-link">
                <Card {...stay} />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection delay={0.4}>
        <div className="pagination">
          <Button
            color="trans"
            size="small"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Typograph variant="body1">
            Page {currentPage} of {totalPages}
          </Typograph>
          <Button
            color="trans"
            size="small"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
};

export default CardSection;