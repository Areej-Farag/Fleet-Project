import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cities as governates } from '../../Mocks/Governates'

const GovernatesPage = () => {
  const [selectedGovernate, setSelectedGovernate] = useState("");
  const navigate = useNavigate();


  const uniqueGovernates = governates.map((gov) => ({
    name: gov.name,
    id: gov.id || gov.gov_id,
  }));


  const handleGovernateChange = (e) => {
    const governateId = e.target.value;
    setSelectedGovernate(governateId);
    if (governateId) {
      navigate(`/trips/${governateId}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select A City </h1>
      <div style={{ marginBottom: "1.5rem" }}>
        <select
          className="governate-selector"
          value={selectedGovernate}
          onChange={handleGovernateChange}
        >
          <option value="">Select A City</option>
          {uniqueGovernates.map((gov, i) => (
            <option key={i} value={gov.id}>
              {gov.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GovernatesPage;