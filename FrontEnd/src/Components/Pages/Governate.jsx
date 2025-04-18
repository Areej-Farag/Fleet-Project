import React, { useState } from "react";
import TripTemplate from "../Templates/CardTemp";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from '../../Mocks/Governates'
import CityOverview from "../Templates/CityOverview";
import Lines from "../Atoms/Lines"
import NavigationBar from "../Organisms/NavigationBar";
import FilterSection from "../Organisms/FilterSection";
 import AirSleepDreamSection from "../Organisms/AirSleepDreamSection";
import houseImage from '../../assets/Images/house.png';

import { useParams } from "react-router";

const TripsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { governateId } = useParams();
  const selectedGovernate = governates.find(
    (gov) => (gov.id || gov.gov_id) === governateId
  )
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="trips-page">
      <AirSleepDreamSection sectionTitle={selectedGovernate?.name} HomeImg={selectedGovernate?.image || houseImage} searchVisible={false} />
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

export default TripsPage;