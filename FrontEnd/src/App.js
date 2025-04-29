// App.jsx
import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Footer from "./Components/Organisms/Footer";
import App2 from "./App2";
import { Outlet } from "react-router-dom";
import { AuthModalProvider } from './Context/AuthModalContext';
import AuthModal from "./Components/Templates/AuthModal";
import { ColorProvider } from './Context/ColorContext';

function App() {
  return (
    <>
      {/* <App2 /> */}
      <ColorProvider>
      <AuthModalProvider>
      <Navbar />
      <AuthModal />
      <Outlet /> {/* هنا هتتعرض كل صفحة حسب الراوت */}
      <Footer />
      </AuthModalProvider>
      </ColorProvider>
    </>
  );
}

export default App;
