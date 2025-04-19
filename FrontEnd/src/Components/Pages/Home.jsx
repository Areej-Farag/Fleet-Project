import React from "react";
import HeroSection from "../Organisms/Herosection";
import GovernatesPage from "../Templates/choosegover";
import AirSleepDreamSection from "../Organisms/AirSleepDreamSection";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from "../../Mocks/Governates";
import HowItWorksSection from "../Organisms/HowItWorksSection";

export default function Home() {
  return (
    <>
      <div>
        {" "}
        <AirSleepDreamSection  />
      </div>
      <HowItWorksSection />
      <div className="mt-5">
        <NearbyGovernoratesSectionTemplate
          governorates={governates}
          sectionTitle="Explore Trips In Egypt"
        />
      </div>
      <div className="mt-5">
        <HeroSection />
      </div>
    </>
  );
}
