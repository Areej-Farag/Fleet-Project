import React from "react";
import CardCarousel from "../Organisms/CardCarousel";
import { cities } from "../../Mocks/Governates";

const SuggestedPlacesTemplate = ({ suggestions = cities }) => {
  return (
    <div className="suggested-places-template py-5">
      <CardCarousel sectionTitle="You may also like" cities={suggestions} />
    </div>
  );
};

export default SuggestedPlacesTemplate;
