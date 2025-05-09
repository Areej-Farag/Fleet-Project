import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGovernateStore from '../../Reducers/GovernateReducersStore';

const GovernatesPage = () => {
  const [selectedGovernate, setSelectedGovernate] = useState("");
  const navigate = useNavigate();
  const { governorates, getAll, loading, error } = useGovernateStore();

  useEffect(() => {
    getAll();
  }, [getAll]);

  const handleGovernateChange = (e) => {
    const governateId = e.target.value;
    setSelectedGovernate(governateId);
    if (governateId) {
      navigate(`/governate/${governateId}`);
    }
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      {loading && <p>Loading ...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div>
          <select
            className="governate-selector"
            value={selectedGovernate}
            onChange={handleGovernateChange}
          >
            <option value="">Choose Governate </option>
            {governorates.map((gov) => (
              <option key={gov._id} value={gov._id}>
                {gov.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default GovernatesPage;