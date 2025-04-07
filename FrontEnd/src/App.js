import React from "react";
import Navbar from "./Components/Molecules/Navbar";
import Footer from "./Components/Molecules/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content container py-4">
        {/* هنا ممكن تضيف مكوناتك الرئيسية للصفحة */}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
