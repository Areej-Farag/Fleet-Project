import React from "react";
import HeroSection from "../Organisms/Herosection";
import AirSleepDreamSection from "../Organisms/AirSleepDreamSection";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
// import { cities } from "../../Mocks/Governates";
import HowItWorksSection from "../Organisms/HowItWorksSection";
import AdventureSection from "../Organisms/AdventureSection";
import ExploreTripsTemplate from "../Templates/ExploreTripsTemplate";
import useGovernateStore from "../../Reducers/GovernateReducersStore";

export default function Home() {

  const { governates: cities, getAll } = useGovernateStore();

  return (
    <>
      <div>
        {" "}
        <AirSleepDreamSection />
      </div>
      <div style={{ marginTop: "110px" }}>
        <ExploreTripsTemplate />
        <HowItWorksSection />
        <AdventureSection />
      </div>
      <div className="mt-5">

        <NearbyGovernoratesSectionTemplate
          governorates={cities}
          sectionTitle="Explore Trips In Egypt"
        />
      </div>
      <div className="mt-5">
        <HeroSection />
      </div>
    </>
  );
}
