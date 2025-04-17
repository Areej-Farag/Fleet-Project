import React, { useState } from 'react';
import '../Styles/Organisms.css';
import ChooseGovernorate from '../Templates/choosegover';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import houseImage from '../../assets/Images/house.png';

const AirSleepDreamSection = () => {
  const [selectedName, setSelectedName] = useState('');
  const navigate = useNavigate();

  const handleSelect = (selectedGovernorate) => {
    if (selectedGovernorate) {
      setSelectedName(selectedGovernorate.label); // حفظ اسم المحافظة
      navigate(`/governorates/${selectedGovernorate.value}`);
    }
  };

  return (
    <section
      className="air-sleep-dream"
      style={{ backgroundImage: `url(${houseImage})` }}
    >
      <div className="overlay">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>
              {selectedName ? `${selectedName}, sleep, dream` : 'Air, sleep, dream'}
            </h1>
            <p>
              {selectedName
                ? `Explore amazing places in ${selectedName}.`
                : 'Find and book a great experience.'}
            </p>
            <button className="search-button">Start your search</button>
          </div>

          <div className="search-box">
            <div className="location-box">
              <label className="location-label">Location</label>
              <ChooseGovernorate onChange={handleSelect} />
            </div>
            <button className="icon-btn">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirSleepDreamSection;
