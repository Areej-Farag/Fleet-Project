
import React from "react";
import HostSection from "./Components/Molecules/HostSection";
import img1 from './Images/avatar.png'


const App = () => {
  return (
    <>
      <HostSection AvatarSrc={img1} HostName={"John Doe"} AvatarSize={"small"} PropertyName={"Bungalow"}/>
    </>
  );
};
export default App;
