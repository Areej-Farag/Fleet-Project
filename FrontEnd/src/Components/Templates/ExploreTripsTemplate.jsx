import React, { useState, useEffect } from "react";
import Typograph from "../Atoms/Typograph";
import CardSection from "../Organisms/CardSection";
import FilterSection from "../Organisms/FilterSection";
import { trips } from "../../Mocks/Trips";
import "../Styles/templates.css";

const shuffleAndPick = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ExploreTripsTemplate = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Recently Added");
  const [randomTrips, setRandomTrips] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const pickedTrips = shuffleAndPick(trips, 9);
    setRandomTrips(pickedTrips);
  }, []);

  const baseTrips = viewAll ? trips : randomTrips;

  const filteredTrips =
    selectedCategory === "All"
      ? baseTrips
      : baseTrips.filter((trip) => trip.category === selectedCategory);

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortBy) {
      case "Rating":
        return b.rating - a.rating;
      case "Price (Low to High)":
        return a.discount - b.discount;
      default:
        return 0;
    }
  });

  return (
    <div className="trip-template">
      <div className="template-header">
        <Typograph variant="h3" bold="true" className="go-title">
          Go somewhere
        </Typograph>
        <Typograph variant="p" className="adventure-sub">
          Let's go on an adventure
        </Typograph>
      </div>

      <div className="filters-bar">
        <FilterSection
          selectedCategory={selectedCategory}
          onFilterChange={setSelectedCategory}
        />
        <div className="custom-sort-box">
          <select
            className="selectbox-styled"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Recently Added">Recently Added</option>
            <option value="Rating">Rating</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
          </select>
        </div>
      </div>

      <CardSection trips={sortedTrips} />

      {!viewAll && (
        <div className="view-all-btn-container">
          <button className="view-all-btn" onClick={() => setViewAll(true)}>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreTripsTemplate;
