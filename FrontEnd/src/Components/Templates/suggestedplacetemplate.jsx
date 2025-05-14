import React from "react";
import CardCarousel from "../Organisms/CardCarousel";
// import { cities as governates } from '../../Mocks/Governates'
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import useGovernateStore from "../../Reducers/GovernateReducersStore";
const SuggestedPlacesTemplate = () => {

  const { governates: cities, getAll } = useGovernateStore();
  return (
    <div className="suggested-places-template py-5">
      <NearbyGovernoratesSectionTemplate
        governorates={cities}
        sectionTitle="Explore Trips In Egypt"
      />
    </div>
  );
};

export default SuggestedPlacesTemplate;
