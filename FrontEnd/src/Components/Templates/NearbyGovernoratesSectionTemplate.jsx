import React from "react";
import CardCarousel from "../Organisms/CardCarousel";
import Typograph from "../Atoms/Typograph";
import "../Styles/templates.css"; 
import Button from "../Atoms/Button"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const NearbyGovernoratesSectionTemplate = ({ governorates, sectionTitle }) => {
  
  const sliderRef = React.useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="nearby-governorates-section">
      <div className="section-header">
        <Typograph variant="h4" bold="True" className="section-title-detailed">
          {sectionTitle}
        </Typograph>
        <div className="carousel-arrows desktop-arrows">
          <Button color="trans" size="small" shape="small-circle" icon={< FaArrowLeftLong  />} iconcolor="#777E90" iconSize={14} className="custom-arrow custom-prev" onClick={goToPrev}/>

          <Button color="trans" size="small" shape="small-circle" icon={<FaArrowRightLong />} iconcolor="#777E90" iconSize={14} className="custom-arrow custom-next" onClick={goToNext}/>

        </div>
      
      </div>
      <CardCarousel governorates={governorates} sliderRef={sliderRef} />
      <div className="carousel-arrows mobile-arrows">
         <Button color="trans" size="small" shape="small-circle" icon={< FaArrowLeftLong  />} iconcolor="#777E90" iconSize={14} className="custom-arrow custom-prev" onClick={goToPrev}/>

         <Button color="trans" size="small" shape="small-circle" icon={<FaArrowRightLong />} iconcolor="#777E90" iconSize={14} className="custom-arrow custom-next" onClick={goToNext}/>

      </div>
    </div>
  );
};

export default NearbyGovernoratesSectionTemplate;