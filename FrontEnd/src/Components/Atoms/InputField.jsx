import React from "react";
import "../../Styles/atoms.css";

export default function InputField({
  hasIcon,
  placeholder ,
  hasButton ,
  type,
  iconContent,
  buttonContent,
  large,
}) {
  return (
    <div
      className={`input-field ${large ? "large" : ""}`}
    >
      <input type={type} placeholder={placeholder} />
      <div className="input-buttons">
        {hasIcon && <span className="input-icon">{iconContent}</span>}
        {hasButton && <button className="input-button">{buttonContent}</button>}
      </div>
    </div>
  );
}
