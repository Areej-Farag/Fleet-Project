import React from "react";

export default function InputFiled({
  hasIcon,
  placeholder,
  hasButton,
  type,
  iconContent,
  buttonContent,
}) {
  return (
    <div className="input-field">
      <h1>Input Field</h1>
      <input type={type} placeholder={placeholder} />
      <span
        className={hasIcon ? "input-icon" : ""}
        style={{ display: hasIcon ? "block" : "none" }}
      >
        {iconContent}
      </span>
      <button
        className={hasButton ? "input-button" : ""}
        style={{ display: hasButton ? "block" : "none" }}
      >
        {buttonContent}
      </button>
    </div>
  );
}