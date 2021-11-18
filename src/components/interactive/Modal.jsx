// Vytvořeno pomocí Headless UI
// Dokumentace ke komponentu: https://headlessui.dev/react/dialog
// Transition komponent dokumentace: https://headlessui.dev/react/transition

import React, { useState, Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

export default function Modal({
  openButton,
  children,
  closeButton,
  className = "",
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeDialog() {
    setIsOpen(false);
  }

  function openDialog() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Tlačítko pro otevření */}
      <button type="button" onClick={openDialog} className={className}>
        {openButton}
      </button>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <HeadlessDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-200 overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay wrapnutý animací */}
            <HeadlessDialog.Overlay className="fixed inset-0 w-screen h-screen bg-gray-950 bg-opacity-70 z-200" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease duration-default"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* Obsah modalu - container */}
            <div className="fixed z-250 top-1/2 md:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-md p-8 bg-background dark:bg-background-200 shadow-lg rounded-xl overflow-y-auto">
              {children}

              {/* Tlačítko pro zavření modalu */}
              <button
                type="button"
                onClick={closeDialog}
                className="mt-10 outline-none"
              >
                {closeButton}
              </button>
            </div>
          </Transition.Child>
        </HeadlessDialog>
      </Transition>
    </>
  );
}

Modal.propTypes = {
  openButton: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.node.isRequired,
};
