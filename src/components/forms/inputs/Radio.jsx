import React from "react";
import PropTypes from "prop-types";

export default function Radio({
  id,
  className = "",
  isInputRequired = false,
  children,
  ...rest
}) {
  return (
    <div className={`ui-radio ${className}`}>
      <input
        type="radio"
        id={id}
        required={isInputRequired}
        className="mr-3"
        {...rest}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  isInputRequired: PropTypes.bool,
  children: PropTypes.node,
};
