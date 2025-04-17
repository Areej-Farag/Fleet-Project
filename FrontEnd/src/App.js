// App.jsx
import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Footer from "./Components/Organisms/Footer";
import App2 from "./App2";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <App2 />
      <Navbar />
      <Outlet /> {/* هنا هتتعرض كل صفحة حسب الراوت */}
      <Footer />
    </>
  );
}

export default App;
