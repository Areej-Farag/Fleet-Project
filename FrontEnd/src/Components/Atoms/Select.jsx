import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";
import { IoIosArrowDown } from "react-icons/io";
import Typograph from "./Typograph";
import colors from "./Colors";

export default function SelectBox({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-box">
      {label && <label className="select-box-label">{label}</label>}

      <div className="select-box-container" onClick={() => setIsOpen(!isOpen)}>
        <span className="select-box-value">{value}</span>
        <span className="select-box-icon">
          <IoIosArrowDown />
        </span>
      </div>

      {isOpen && (
        <ul className="select-box-dropdown">
          {options.map((option, index) => (
            <li
              key={index}
              className={`select-box-option ${
                option === value ? "selected" : ""
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              <Typograph variant="h6" color={colors.Neutrals[4]}>
                {option}
              </Typograph>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

SelectBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
