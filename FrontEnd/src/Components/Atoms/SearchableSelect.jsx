import React, { useState, useEffect , useContext} from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";
import Typograph from "./Typograph";
// import colors from "./Colors";
import { ColorContext } from '../../Context/ColorContext';

export default function SelectBox({ label, value, options, onChange }) {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const colors = useContext(ColorContext);
  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue, options]);

  const handleSelect = (option) => {
    setInputValue(option);
    onChange(option);
    setShowSuggestions(false);
  };

  return (
    <div className="select-box">
      {label && <label className="select-box-label">{label}</label>}

      <input
        type="text"
        className="select-box-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} // لتأخير الإغلاق بعد الضغط
        placeholder="اكتب اسم المحافظة"
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {showSuggestions && filteredOptions.length > 0 && (
        <ul className="select-box-dropdown">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className={`select-box-option ${
                option === value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
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
