import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";


const Button = ({ children, color = "blue", shape = "default", size = "small", icon, iconSize = 24, iconPosition = "left", onClick, disabled }) => {
  return (
    <button
      className={`button ${color} ${shape} ${size}`}  
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="icon" style={{ fontSize: `${iconSize}px` }}>{icon}</span>
      )}
        {children} 
      {icon && iconPosition === "right" && (
        <span className="icon" style={{ fontSize: `${iconSize}px` }}>{icon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["blue", "trans", "white","black"]),
  shape: PropTypes.oneOf(["default", "small-circle","large-circle"]),
  size: PropTypes.oneOf(["small", "default", "large"]),
  icon: PropTypes.node,
  iconSize: PropTypes.number, 
  iconPosition: PropTypes.oneOf(["left", "right"]), 
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: "blue",
  shape: "default",
  size: "small",
  iconSize: 24, 
  iconPosition: "left",
  onClick: () => {},
  disabled: false,
  children: null,
};

export default Button;
