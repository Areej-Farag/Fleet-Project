import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Comment from "./Components/Molecules/Comment";
import { trips } from "./Mocks/Trips";
import TripComments from "./Components/Organisms/TripComments";
import HostCard from "./Components/Organisms/HostCard";

function App() {
  const handleGovernorateChange = (gov) => {
    console.log("✅ المحافظة المختارة:", gov);
  };

  return (
    <>
      <Navbar />
      {/* <TripComments /> */}
      <HostCard />
    </>
  );
}

export default App;
