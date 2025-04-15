import React from "react";
import GovernorateSelect from "./Components/Molecules/GovernorateSelect";
import Typograph from "./Components/Atoms/Typograph";
import colors from "./Components/Atoms/Colors";

function App() {
  const handleGovernorateChange = (gov) => {
    console.log("✅ المحافظة المختارة:", gov);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <Typograph
        variant="h4"
        color={colors.Primary[500]}
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Your Trip in Egypt
      </Typograph>
      <GovernorateSelect onGovernorateChange={handleGovernorateChange} />
    </div>
  );
}

export default App;
