import React from "react";
import "../Styles/atoms.css";

export default function InputField({
  labelTitle,
  hasIcon,
  placeholder,
  hasButton,
  type,
  iconContent,
  buttonContent,
  large= false,
  rounded = true
}) {
  return (
    <div className={`input-field ${large ? "large" : ""} ${rounded ? "rounded" : ""}`}>
      <label className="input-label" >{labelTitle}</label>
      <div className="input-container">
      <input type={type} placeholder={placeholder} />
      <div className="input-buttons">
        {hasIcon && <span className="input-icon">{iconContent}</span>}
        {hasButton && <button className="input-button">{buttonContent}</button>}
      </div>
      </div>
     
    </div>
  );
}
