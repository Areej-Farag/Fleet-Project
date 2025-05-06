// App.jsx
import React from "react";
import Navbar from "./Components/Organisms/Navbar";
import Footer from "./Components/Organisms/Footer";
import { Outlet } from "react-router-dom";
import { AuthModalProvider } from './Context/AuthModalContext';
import AuthModal from "./Components/Templates/AuthModal";
import { ColorProvider } from './Context/ColorContext';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientID = process.env.CLIENT_ID;
  console.log(clientID);
  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
      <ColorProvider>
      <AuthModalProvider>
      <Navbar />
      <AuthModal />
      <Outlet /> 
      <Footer />
      </AuthModalProvider>
      </ColorProvider>
    </GoogleOAuthProvider>
    </>
  );

}

export default App;
