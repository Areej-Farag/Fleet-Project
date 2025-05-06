import React, { useState, useEffect , useContext } from "react";
import Typograph from "../Atoms/Typograph";
import CardSection from "../Organisms/CardSection";
import FilterSection from "../Organisms/FilterSection";
import { trips } from "../../Mocks/Trips";
import "../Styles/templates.css";
import AnimatedSection from "../Atoms/AnimationSection";
// import colors from "../Atoms/Colors";
import { ColorContext } from '../../Context/ColorContext';
const shuffleAndPick = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ExploreTripsTemplate = () => {
  const colors = useContext(ColorContext);
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
      <div className="template-header ">
      <AnimatedSection delay={0}>
        <div>
           <Typograph variant="h3" bold="true" className="go-title">
          Go somewhere
        </Typograph>
        <Typograph variant="p" color={colors.Neutrals[4]}>
          Let's go on an adventure
        </Typograph>
        </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
       
        <div className="filters-bar ">
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
      </AnimatedSection>
      </div>

 

      <CardSection trips={sortedTrips} />

      {!viewAll && (
        <AnimatedSection delay={0.3}>
        <div className="view-all-btn-container">
          <button className="view-all-btn" onClick={() => setViewAll(true)}>
            View All
          </button>
        </div>
        </AnimatedSection>
      )}
    </div>
  );
};

export default ExploreTripsTemplate;
