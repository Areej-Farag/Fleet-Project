import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";

const Icon = ({ name, size = 24, color }) => {
  return <i className={`icon-${name}`} style={{ fontSize: size, color }} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
