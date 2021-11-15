import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Icons
// import { MdExpandMore } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Accordion({
  id,
  title,
  children,
  isOpen,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const elementRef = useRef(); // Ref nutné pro animaci otevření accordionu

  // Funkce animující otevření a zavření accordionu (nelze udělat čistě přes css)
  function runAnimationToggle() {
    const element = elementRef.current;

    if (element.style.maxHeight) {
      element.style.maxHeight = null;
    } else {
      element.style.maxHeight = element.scrollHeight + "px";
    }
  }

  // Funkce, která přepíná stav accordionu s animací
  function toggleAccordion() {
    setOpen(!open);
    runAnimationToggle();
  }

  // Otevře accordion když je props `isOpen` nastavená na "true"
  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      runAnimationToggle();
    }
  }, [isOpen]);

  return (
    <div className={`block w-full h-auto mb-6 ${className}`}>
      {/* Hlavní tlačítko co přepíná accordion */}
      <button
        onClick={toggleAccordion}
        className="w-full py-4 px-6 flex items-center justify-between bg-background-200 rounded-default transition-colors duration-default hover:bg-background-300"
        type="button"
        aria-expanded={open ? true : false}
        aria-controls={id}
      >
        <span className="font-semibold text-default-strong text-h5">
          {title}
        </span>
        <HiOutlineChevronDown
          className={`text-xl transition-transform duration-default ${
            open ? "-rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Vnější wrapper obsahu !! -> Needitovat třídy (závislost animace) */}
      <div
        id={id}
        ref={elementRef}
        className="overflow-hidden max-h-0 transition-max-height duration-default"
      >
        {/* Vnitřní wrapper obsahu -> případné třídy pro obsah nastavit zde */}
        <div className="pt-6 pb-0 px-6">{children}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
};
