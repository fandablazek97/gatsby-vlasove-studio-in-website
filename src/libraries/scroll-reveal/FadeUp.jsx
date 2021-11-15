import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "../../hooks/useScrollReveal";

FadeUp.defaultProps = {
  as: "div",
};

export default function FadeUp({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`scroll-reveal sr-fade-up-hidden ${
        view ? "sr-fade-up-visible" : null
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

FadeUp.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
