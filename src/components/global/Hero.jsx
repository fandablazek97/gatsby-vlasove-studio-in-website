import React from "react";
import PropTypes from "prop-types";

export default function Hero({ title, subtitle }) {
  return (
    <header className="w-screen h-128" role="banner">
      <div className="ui-wrapper-sm h-full flex flex-col justify-center items-center">
        <h1 className="ui-heading mb-0 w-full text-center text-3xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
