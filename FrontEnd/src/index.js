import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Button from "./Components/Atoms/Button";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineHouse } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Typography from "./Components/Atoms/Typograph";
import CityOverview from "./Components/Templates/CityOverview";
import Card from "./Components/Molecules/Card";
import DetailedCard from "./Components/Molecules/DetailedCard";
import { FaWifi, FaUtensils } from "react-icons/fa";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
      {/*<App />*/}
      <DemoApp />
    </>
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


