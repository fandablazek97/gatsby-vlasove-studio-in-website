import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "../../hooks/useScrollReveal";

ZoomIn.defaultProps = {
  as: "div",
};

export default function ZoomIn({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`scroll-reveal sr-zoom-in-hidden ${
        view ? "sr-zoom-in-visible" : null
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

ZoomIn.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
