
import React from "react";
import TripDetailsTemplate from "../Templates/TripDetailsTemplate"; 
import { trips } from "../../Mocks/Trips";
import { useParams } from "react-router-dom";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from '../../Mocks/Governates'
import TripCommentsSection from "../Templates/TripCommentsSec"
const TripPage = () => {
  const { tripId } = useParams();
  const trip = trips.find((t) => t.id === tripId);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div>
      <TripDetailsTemplate trip={trip} />
      <NearbyGovernoratesSectionTemplate
            governorates={governates}
            sectionTitle="Explore Trips In Egypt"
          />
          <TripCommentsSection/>
    </div>

  );
};

export default TripPage;