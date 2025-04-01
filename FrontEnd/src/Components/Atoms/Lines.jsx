import React from "react";
import "../Styles/atoms.css";
import PropTypes from "prop-types";
const Line = ({ height = "1px" }) => {
  return <hr className="line" style={{ borderTopWidth: height }} />;
};

Line.prototype = {
  height: PropTypes.string,
};
export default Line;
