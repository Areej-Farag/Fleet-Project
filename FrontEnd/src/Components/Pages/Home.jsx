import React from "react";
import HeroSection from "../Organisms/Herosection";
import AirSleepDreamSection from "../Organisms/AirSleepDreamSection";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from "../../Mocks/Governates";

export default function Home() {
  return (
    <>
      <div>
        {" "}
        <AirSleepDreamSection  />
      </div>
      <div style={{marginTop: "110px"}}>
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
