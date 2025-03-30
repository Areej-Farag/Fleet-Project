import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";

const Badge = ({ text, color = "blue" }) => {
  return <span className={`badge ${color}`}>{text}</span>;
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["blue", "red", "green", "yellow" , "grey" , "black" , "white" ,"lightblue", "purpleblue"]),
};

export default Badge;
// <Badge text="Sale" color="white"/>
