import React from "react";
import PropTypes from "prop-types";

export default function Checkbox({
  id,
  className = "",
  isInputRequired = false,
  children,
  ...rest
}) {
  return (
    <div className={`ui-checkbox ${className}`}>
      <input
        type="checkbox"
        id={id}
        required={isInputRequired}
        className="mr-3"
        {...rest}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  isInputRequired: PropTypes.bool,
  children: PropTypes.node,
};
