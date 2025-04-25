
import React from "react";
import TripDetailsTemplate from "../Templates/TripDetailsTemplate"; 
import { trips } from "../../Mocks/Trips";
import { useParams } from "react-router-dom";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from '../../Mocks/Governates'
import TripCommentsSection from "../Templates/TripCommentsSec"
import HeroSection from "../Organisms/Herosection";
import ImageGridTemplate from "../Templates/ImageGridTemplate";

const TripPage = () => {
  const { tripId } = useParams();
  const trip = trips.find((t) => t.id === tripId);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
  
    <div className="trip-page-container flex-column justify-content-center">
        <div className="trip-grid-Photos"> 
        <ImageGridTemplate mainImage={trip.image} smallImages={trip.detailesImages} />
    </div>
      <TripDetailsTemplate trip={trip} />
      <NearbyGovernoratesSectionTemplate
            governorates={governates}
            sectionTitle="Explore Trips In Egypt"
          />
          <TripCommentsSection trip={trip}/>
          <HeroSection/>
    </div>

  );
};

export default TripPage;