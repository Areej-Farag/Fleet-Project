import React from "react";
import CardCarousel from "../Organisms/CardCarousel";
import { cities as governates } from '../../Mocks/Governates'
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";

const SuggestedPlacesTemplate = ({ suggestions = governates }) => {
  return (
    <div className="suggested-places-template py-5">
        <NearbyGovernoratesSectionTemplate
            governorates={governates}
            sectionTitle="Explore Trips In Egypt"
          />
    </div>
  );
};

export default SuggestedPlacesTemplate;
