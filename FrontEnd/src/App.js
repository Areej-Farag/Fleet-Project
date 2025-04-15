import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Comment from "./Components/Molecules/Comment";
import { trips } from "./Mocks/Trips";
import TripComments from "./Components/Organisms/TripComments";
import HostCard from "./Components/Organisms/HostCard";
import TripPaymentDetailes from "./Components/Organisms/TripPaymentDetailes";

function App() {
  return (
    <>
      <Navbar />
          <TripPaymentDetailes />
      <HostCard />
    </>
  );
}

export default App;

