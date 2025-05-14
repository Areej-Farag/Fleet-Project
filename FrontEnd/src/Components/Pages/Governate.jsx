import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useGovernateStore from "../../Reducers/GovernateReducersStore";
import TripTemplate from "../Templates/CardTemp";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import CityOverview from "../Templates/CityOverview";
import Lines from "../Atoms/Lines";
import NavigationBar from "../Organisms/NavigationBar";
import FilterSection from "../Organisms/FilterSection";
import AirSleepDreamSection from "../Organisms/AirSleepDreamSection";
import AnimatedSection from "../Atoms/AnimationSection";
import houseImage from '../../assets/Images/house.png';
import useTripsStore from "../../Reducers/TripsStore";
const GovernatePage = () => {
  const { governateId } = useParams();
  // const {fetchAllTrips , trips} = useTripsStore();
  const {
    trips,
    governorates,
    selectedGovernorate,
    getOneById,
    getTripsByGovernatename,
    loading,
    error,
  } = useGovernateStore();
const [selectedCategory, setSelectedCategory] = React.useState("All");

const [filteredTrips, setFilteredTrips] = useState([]);
  // Fetch governorate details, all governorates, and trips
  useEffect(() => {
    getOneById(governateId);
    console.log('selectedGovernorate:', selectedGovernorate?.name);
    // fetchAllTrips();
    selectedGovernorate && getTripsByGovernatename(selectedGovernorate?.name); // Fetch trips for the governorate
    console.log("Trips: ", trips);
  }, [governateId]);
  useEffect(() => {
    // CheckTrips();
  }, [governateId]);
  // const CheckTrips =()=>{
  //  if (trips){
  //  const TT = trips.filter((trip) => trip.governorate === selectedGovernorate.name);
  //  setFilteredTrips(TT);
  //   }
  //   console.log('filteredTrips:', filteredTrips);
  // }


  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="trips-page">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <AirSleepDreamSection
            sectionTitle={selectedGovernorate?.name || "Governorate"}
            HomeImg={selectedGovernorate?.image || houseImage}
            searchVisible={false}
            centerText={true}
          />
          <NavigationBar />
          <FilterSection onFilterChange={handleFilterChange} />
          <Lines />
          <div className="trips-container container-fluid">
            <TripTemplate
              trips={trips} // Pass all trips
              selectedCategory={selectedCategory}
            />
          </div>
          <NearbyGovernoratesSectionTemplate
            sectionTitle="Explore Trips In Egypt"
          />
          <AnimatedSection delay={0.1}>
            <CityOverview
              description={selectedGovernorate?.description || "No description available for this governorate."}
              videoUrl={selectedGovernorate?.video || ""}
            />
          </AnimatedSection>
        </>
      )}
    </div>
  );
};

export default GovernatePage;