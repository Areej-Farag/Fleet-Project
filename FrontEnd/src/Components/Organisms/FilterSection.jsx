import React, { useState, useEffect } from "react";
import Typograph from "../Atoms/Typograph";
import SelectBox from "../Atoms/Select";
import { useParams } from "react-router-dom";
import "../Styles/organisms.css";
import AnimatedSection from "../Atoms/AnimationSection";
import useGovernateStore from "../../Reducers/GovernateReducersStore";
import useTripsStore from "../../Reducers/TripsStore";

const FilterSection = ({ onFilterChange }) => {
  const { governateId } = useParams();
  const { selectedGovernorate } = useGovernateStore();
  const { trip, fetchTripById, loading, error } = useTripsStore();
  const [tripDetails, setTripDetails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch trip details for each TripId in selectedGovernorate.trips
  useEffect(() => {
    if (selectedGovernorate?.trips?.length) {
      const fetchTrips = async () => {
        const tripPromises = selectedGovernorate.trips.map((trip) =>
          fetchTripById(trip.TripId).then(() => trip) // Fetch trip details
        );
        const trips = await Promise.all(tripPromises);
        setTripDetails(trips);
      };
      fetchTrips();
    } else {
      setTripDetails([]);
    }
  }, [selectedGovernorate, fetchTripById]);

  // Derive available categories from trip details
  const availableCategories = [
    "All",
    ...new Set(tripDetails.map((trip) => trip.category).filter(Boolean)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <AnimatedSection delay={0.2}>
      <div className="filter-section">
        {loading && <p>جاري التحميل...</p>}
        {error && <p>خطأ: {error}</p>}
        {!loading && !error && (
          <>
            <Typograph variant="h2" bold="True" className="filter-title">
              Places to visit
            </Typograph>
            <SelectBox
              label=""
              value={selectedCategory}
              options={availableCategories}
              onChange={handleCategoryChange}
            />
          </>
        )}
      </div>
    </AnimatedSection>
  );
};

export default FilterSection;