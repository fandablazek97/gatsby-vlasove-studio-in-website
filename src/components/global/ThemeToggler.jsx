import React from "react";
import PropTypes from "prop-types";
import useDarkMode from "use-dark-mode";

// Icons
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function ThemeToggler({ className = "" }) {
  // Nastavení Dark modu
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
    storageKey: "darkMode", // klíč pro uložení do localstorage - pokud mají dva weby stejný klíč budou sdílet i preferenci dark modu
  });

  return (
    <button
      onClick={darkMode.toggle}
      className={`theme-toggler text-default-strong opacity-80 text-2xl p-3 bg-transparent hover:bg-default hover:bg-opacity-10 rounded-default transition-colors duration-default ${className}`}
      aria-label="zapnout nebo vypnout tmavý vzhled"
    >
      {darkMode.value ? <MdLightMode /> : <MdNightlight />}
    </button>
  );
}

ThemeToggler.propTypes = {
  className: PropTypes.string,
};
