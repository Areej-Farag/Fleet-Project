import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WishlistPage from "./Components/Pages/Wishlist.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
