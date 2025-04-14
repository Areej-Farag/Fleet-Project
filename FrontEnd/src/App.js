import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Comment from "./Components/Molecules/Comment";
import { trips } from "./Mocks/Trips";
import TripComments from "./Components/Organisms/TripComments";
import HostCard from "./Components/Organisms/HostCard";
import Footer from "./Components/Organisms/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <TripComments /> */}
      <HostCard />
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
