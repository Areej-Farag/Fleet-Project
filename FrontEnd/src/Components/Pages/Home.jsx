import React from "react";
import HeroSection from "../Organisms/Herosection";
import GovernatesPage from "../Templates/choosegover";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from '../../Mocks/Governates'
export default function Home() {
  return (
    <>
      <div>
        <GovernatesPage />
      </div>
      <div> <NearbyGovernoratesSectionTemplate
        governorates={governates}
        sectionTitle="Explore Trips In Egypt"
      /></div>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
