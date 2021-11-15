import React from "react";
import PropTypes from "prop-types";

export default function IpnutFloating({
  type = "text",
  id,
  name,
  label,
  className = "",
  isInputRequired = false,
  ...rest
}) {
  return (
    <div className={`ui-input ${className}`}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={label}
        required={isInputRequired}
        className="input-floating"
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

IpnutFloating.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isInputRequired: PropTypes.bool,
};
