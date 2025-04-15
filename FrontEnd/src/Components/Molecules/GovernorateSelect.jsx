import React, { useState } from "react";
import SelectBox from "../Atoms/SearchableSelect"; // مسار الـ Atom
import { governates } from "../../Mocks/Governates";
// مسار الداتا

export default function GovernorateSelect({ onGovernorateChange }) {
  const [selectedGovernorate, setSelectedGovernorate] = useState("");

  const handleSelect = (governorateName) => {
    setSelectedGovernorate(governorateName);
    const selected = governates.find((gov) => gov.name === governorateName);
    if (onGovernorateChange && selected) {
      onGovernorateChange(selected); // لو عايزة تبعتي الداتا كلها
    }
  };

  const governorateNames = governates.map((gov) => gov.name);

  return (
    <div className="governorate-select">
      <SelectBox
        label="Choose the Destination"
        value={selectedGovernorate || "Search"}
        options={governorateNames}
        onChange={handleSelect}
      />
    </div>
  );
}
