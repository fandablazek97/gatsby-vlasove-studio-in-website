import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "../../hooks/useScrollReveal";

FadeLeft.defaultProps = {
  as: "div",
};

export default function FadeLeft({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`scroll-reveal sr-fade-left-hidden ${
        view ? "sr-fade-left-visible" : null
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

FadeLeft.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
