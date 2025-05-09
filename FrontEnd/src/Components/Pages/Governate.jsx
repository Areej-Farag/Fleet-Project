import React, { useEffect } from "react";
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

const GovernatePage = () => {
  const { governateId } = useParams();
  const {
    governorates,
    selectedGovernorate,
    trips,
    getAll,
    getOneById,
    getTripsByGovernateId,
    loading,
    error,
  } = useGovernateStore();
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Fetch governorate details, all governorates, and trips
  useEffect(() => {
    getOneById(governateId); // Fetch the specific governorate
    getAll(); // Fetch all governorates for NearbyGovernoratesSectionTemplate
    getTripsByGovernateId(governateId); // Fetch trips for the governorate
  }, [governateId, getOneById, getAll, getTripsByGovernateId]);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="trips-page">
      {loading && <p>جاري التحميل...</p>}
      {error && <p>خطأ: {error}</p>}
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