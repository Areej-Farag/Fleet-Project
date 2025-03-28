import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InputFiled from './Components/Atoms/InputField';
import { IoArrowForward } from "react-icons/io5";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <InputFiled
    type="text"
    placeholder="Enter your name"
    hasButton={true}
    hasIcon={true}
    buttonContent={<button>Submit</button>}
    iconContent={<IoArrowForward/>}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
