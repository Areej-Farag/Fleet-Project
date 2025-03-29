import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Typograph = ({ variant, children, className, color }) => {
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
    button: "btn",
  };

  const Tag = variant in variants ? variant : "p";
  const styles = color ? { color } : {}; // تطبيق اللون إذا كان موجودًا
  const classes = `${variants[variant]} ${className}`;

  return (
    <Tag className={classes} style={styles}>
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
    "button",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string, // تحديد اللون كـ prop اختيارية
};

Typograph.defaultProps = {
  variant: "p",
  className: "",
  color: "", // افتراضيًا بدون لون
};

export default Typograph;
