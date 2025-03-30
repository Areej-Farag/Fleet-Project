import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";

const Avatar = ({ src, alt, size = "medium" }) => {
  return <img src={src} alt={alt} className={`avatar ${size}`} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Avatar;
