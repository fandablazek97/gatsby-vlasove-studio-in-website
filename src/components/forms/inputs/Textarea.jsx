import React from "react";
import PropTypes from "prop-types";

export default function Textarea({
  id,
  name,
  cols = "30",
  rows = "10",
  label,
  className = "",
  isInputRequired = false,
  ...rest
}) {
  return (
    <div className={`ui-input ${className}`}>
      <textarea
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        placeholder={label}
        required={isInputRequired}
        {...rest}
      />
    </div>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cols: PropTypes.string,
  rows: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isInputRequired: PropTypes.bool,
};
