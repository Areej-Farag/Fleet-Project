import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";

const Icon = ({ size = 24, color, IconContetnt, children }) => {
  return (
    <div className="IconContainer">
      <span className={`icon`} style={{ fontSize: size, color }}>
        {IconContetnt}
      </span>
      <div className="IconText">{children}</div>
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
