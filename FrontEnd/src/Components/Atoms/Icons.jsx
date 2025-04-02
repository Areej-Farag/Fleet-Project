import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";

const Icon = ({
  size = 24,
  color,
  IconContetnt,
  children,
  direction = "row",
  bold,
}) => {
  return (
    <div className="IconContainer" style={{ flexDirection: { direction } }}>
      <span
        className={`icon`}
        style={{
          fontSize: size,
          color,
          fontWeight: bold ? "700" : "normal",
        }}
      >
        {IconContetnt }
      </span>
      <div className="IconText">{children}</div>
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ]),
};

export default Icon;
