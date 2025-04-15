
import React, { useState } from "react";
import Typograph from "../Atoms/Typograph";
import SelectBox from "../Atoms/Select";
import { trips } from "../../Mocks/Trips";
import { cities as governates } from "../../Mocks/Governates";
import { useParams } from "react-router-dom";
import "../Styles/organisms.css";

const FilterSection = ({ onFilterChange }) => {
  const { governateId } = useParams();

  const selectedGovernate = governates.find(
    (gov) => (gov.id || gov.gov_id) === governateId
  );

  const governateTrips = trips.filter(
    (trip) => trip.governate === selectedGovernate?.name
  );

  
  const availableCategories = [
    "All",
    ...new Set(governateTrips.map((trip) => trip.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category); 
  };

  return (
    <div className="filter-section">
      <Typograph variant="h2" bold="True" className="filter-title">
        Places to visit
      </Typograph>
      <SelectBox
        label=""
        value={selectedCategory}
        options={availableCategories}
        onChange={handleCategoryChange}
      />
    </div>
  );
};

export default FilterSection;