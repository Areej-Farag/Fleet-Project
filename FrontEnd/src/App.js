// App.jsx
import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Footer from "./Components/Organisms/Footer";
import Governate from "./Components/Pages/Governate"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Governate /> 
      <Footer />
    </>
  );
}

export default App;

