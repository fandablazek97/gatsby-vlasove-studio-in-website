import React from "react";
import PropTypes from "prop-types";

export default function Switch({
  id,
  className = "",
  size,
  isInputRequired = false,
  children,
  ...rest
}) {
  return (
    <div className={`ui-switch ${className}`} data-size={size}>
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

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  isInputRequired: PropTypes.bool,
  children: PropTypes.node,
};
