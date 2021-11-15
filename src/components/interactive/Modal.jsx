import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Utils
import { isBrowser } from "../../hooks/utils/isBrowser";

// Icons
import { MdClose } from "react-icons/md";

export default function Modal({ button, content, isOpen }) {
  // State
  const [open, setOpen] = useState(false);

  // Funkce pro otevření modalu a zamknutí scrollu (včetně iOS zařízení)
  function openModal() {
    setOpen(true);
    if (isBrowser) {
      document.body.classList.add("scroll-lock");
    }
  }

  // Funkce pro zavření modalu a odemknutí scrollu
  function closeModal() {
    setOpen(false);
    if (isBrowser) {
      document.body.classList.remove("scroll-lock");
    }
  }

  // Funkce která otevře modal při pravdivé props "isOpen"
  useEffect(() => {
    if (isOpen) {
      openModal();
    }
  }, [isOpen]);

  return (
    <div className="modal">
      {/* Otevírací tlačítko -> přes props button lze naprogramovat cokoliv pro otevření */}
      <button onClick={openModal} aria-labelledby="Otevřít modal">
        {button}
      </button>

      {/* Overlay */}
      <div
        onClick={closeModal}
        onKeyDown={closeModal}
        role="none"
        className={`modal__overlay ${open ? "modal__overlay--active" : ""}`}
      ></div>

      {/* Popup okno + obsah přes props */}
      <div
        className={`modal__content ${open ? "modal__content--active" : ""}`}
        aria-modal="true"
      >
        {content}
      </div>

      {/* Křížek na zavření */}
      <button
        onClick={closeModal}
        className={`ui-button modal__close-button ${
          open ? "modal__close-button--active" : ""
        }`}
        variant="text"
        data-icon="single"
        data-size="2xl"
        aria-label="Zavřít"
      >
        <MdClose className="modal__close-icon" />
      </button>
    </div>
  );
}

Modal.propTypes = {
  button: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};
