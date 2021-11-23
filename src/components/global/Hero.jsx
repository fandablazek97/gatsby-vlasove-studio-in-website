import React from "react";
import PropTypes from "prop-types";

export default function Hero({ title, subtitle }) {
  return (
    <header className="w-screen h-128" role="banner">
      <div className="ui-wrapper-sm h-full flex flex-col justify-center items-center">
        <div className="w-full font-bold text-h5 text-center text-primary mt-20 mb-3">
          Verze 0.9.4
        </div>
        <h1 className="ui-heading w-full text-center text-3xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="ui-lead self-center text-center">{subtitle}</p>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
