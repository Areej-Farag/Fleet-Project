
import React from "react";
import TripDetailsTemplate from "../Templates/TripDetailsTemplate"; 
import { trips } from "../../Mocks/Trips";
import { useParams } from "react-router-dom";
import NearbyGovernoratesSectionTemplate from "../Templates/RandomGovern-Card";
import { cities as governates } from '../../Mocks/Governates'
import TripCommentsSection from "../Templates/TripCommentsSec"
import HeroSection from "../Organisms/Herosection";
import ImageGridTemplate from "../Templates/ImageGridTemplate";
import img1 from "../../assets/Images/img1.PNG";
import img2 from "../../assets/Images/img2.PNG";
import img3 from "../../assets/Images/img3.PNG";
import primary from "../../assets/Images/primary img.png";

const TripPage = () => {
  const { tripId } = useParams();
  const trip = trips.find((t) => t.id === tripId);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
  
    <div>
        <div className="trip-grid-Photos"> 
        <ImageGridTemplate mainImage={[primary]} smallImages={[img1, img2, img3]} />
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