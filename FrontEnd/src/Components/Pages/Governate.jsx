
import React, { useState } from "react";
import TripTemplate from "../Templates/CardTemp";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from '../../Mocks/Governates'
import CityOverview from "../Templates/CityOverview";
import Lines from "../Atoms/Lines"
import NavigationBar from "../Organisms/NavigationBar";
import FilterSection from "../Organisms/FilterSection";
 


const Governate = () => {
  console.log("Governate page loaded!");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="trips-page">
      <NavigationBar />
      <FilterSection onFilterChange={handleFilterChange} />
      <Lines />
      <TripTemplate selectedCategory={selectedCategory} />
      <NearbyGovernoratesSectionTemplate
        governorates={governates}
        sectionTitle="Explore Trips In Egypt"
      />
      <CityOverview
        description="“Explore Northland’s stunning beaches, lush forests, and rich Māori heritage. Sail through the Bay of Islands, visit ancient Kauri trees, and soak in endless adventures. Experience the magic of New Zealand’s Winterless North!”"
        videoUrl="https://youtu.be/au8hr-0c92I?si=aBbrDfO5WEKFJgtZ"
      />

    </div>
  );
};

export default Governate;