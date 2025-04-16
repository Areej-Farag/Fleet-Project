// App.jsx
import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Footer from "./Components/Organisms/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* هنا هتتعرض كل صفحة حسب الراوت */}
      <Footer />
     

    </>
  );
}

export default App;
