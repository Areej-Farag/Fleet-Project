import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Typograph = ({ variant, children, bold, color, className }) => {
  const variants = {
    h1: "h1 display-1",
    h2: "h2 display-2",
    h3: "h3 display-3",
    h4: "h4 display-4",
    h5: "h5",
    h6: "h6",
    p: "p",
    lead: "lead",
    small: "small",
    muted: "text-muted",
    blockquote: "blockquote",
  };

  const grayShades = {
    dark: "#333333", // رمادي غامق جدًا
    medium: "#666666", // رمادي متوسط
    light: "#999999", // رمادي فاتح
    black: "#000000", // أسود
  };

  const Tag = variant in variants ? variant : "p";
  const textColor = grayShades[color] || color || "#000"; // الافتراضي أسود
  const fontWeight = bold ? "bold" : "normal"; // تحديد الـ Bold

  return (
    <Tag
      className={`${variants[variant]} ${className}`}
      style={{ color: textColor, fontWeight: fontWeight }}
    >
      {children}
    </Tag>
  );
};

Typograph.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "lead",
    "small",
    "muted",
    "blockquote",
  ]),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(["dark", "medium", "light", "black"]),
    PropTypes.string, // لدعم إدخال ألوان مباشرة مثل HEX أو RGB
  ]),
  className: PropTypes.string,
};

Typograph.defaultProps = {
  variant: "p",
  color: "black",
  bold: false,
  className: "",
};

export default Typograph;
