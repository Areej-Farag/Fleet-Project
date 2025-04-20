import React, { useState } from "react";
import "../Styles/organisms.css";
import ChooseGovernorate from "../Templates/choosegover";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import houseImage from "../../assets/Images/house.png";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";

const AirSleepDreamSection = ({
  sectionTitle,
  HomeImg = "https://wallpapercave.com/wp/wp9116727.jpg",
  searchVisible = true,
  centerText = false,
}) => {
  const [selectedName, setSelectedName] = useState("");
  const navigate = useNavigate();

  const handleSelect = (selectedGovernorate) => {
    if (selectedGovernorate) {
      setSelectedName(selectedGovernorate.name); // حفظ اسم المحافظة
      navigate(`/governorates/${selectedGovernorate.value}`);
    }
  };
  const CenterStyle = {
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    textShadow: "7px 5px 5px rgba(0, 0, 0, 0.5)",
    fontSize: "5rem",
  };
  return (
    <section
      className="air-sleep-dream mt-3"
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay" style={centerText ? CenterStyle : {}}>
        <div className="content-wrapper">
          <div className="text-content">
            <Typograph variant="h2">
              {sectionTitle
                ? `${sectionTitle}`
                : "Wander Egypt Like Never Before"}
            </Typograph>
            <p>
              {sectionTitle
                ? `Explore amazing places in ${sectionTitle}.`
                : "Find and book a great experience."}
            </p>

            {searchVisible && (
              <Button shape="default" size="default" color="black">
                Start your search
              </Button>
            )}
          </div>

          {searchVisible && (
            <div className="search-box d-flex ">
              <div className="location-box ">
                <label className="location-label">
                  <FaMapMarkerAlt style={{ marginRight: "6px" }} />
                  Location
                </label>
                <p className="location-sub">Where are you going?</p>
              </div>
              <div className="select-wrapper d-flex align-items-center">
                <ChooseGovernorate onChange={handleSelect} />
                <Button
                  shape="small-circle"
                  size="default"
                  color="blue"
                  icon={<FaSearch />}
                  iconSize={20}
                ></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AirSleepDreamSection;
