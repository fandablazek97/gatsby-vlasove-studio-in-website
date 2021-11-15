import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "../../hooks/useScrollReveal";

ZoomOut.defaultProps = {
  as: "div",
};

export default function ZoomOut({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`scroll-reveal sr-zoom-out-hidden ${
        view ? "sr-zoom-out-visible" : null
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

ZoomOut.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
