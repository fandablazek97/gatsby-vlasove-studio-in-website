// Vytvořeno pomocí Headless UI
// Dokumentace ke komponentu: https://headlessui.dev/react/dialog
// Transition komponent dokumentace: https://headlessui.dev/react/transition

import React, { useState, Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

// Icon
import { MdClose } from "react-icons/md";

export default function ModalImage({ openButton, children }) {
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
      <button type="button" onClick={openDialog}>
        {openButton}
      </button>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <HeadlessDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 w-screen h-screen z-200"
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
            {/* Overlay */}
            <HeadlessDialog.Overlay className="fixed inset-0 w-screen h-screen bg-gray-950 bg-opacity-80 z-200" />
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
            {/* Obsah modalu - container pro obrázek */}
            <div className="fixed w-[90%] h-[80%] top-[10%] bottom-[10%] left-[5%] right-[5%] z-250">
              <div className="modal-image__wrapper-image">{children}</div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Tlačítko pro zavření (křížek) */}
            <button
              type="button"
              onClick={closeDialog}
              className="fixed top-6 right-6 text-4xl text-white p-2 bg-transparent hover:bg-white focus:bg-white hover:bg-opacity-15 focus:bg-opacity-15 transition-colors duration-default rounded-default z-250"
            >
              <MdClose />
            </button>
          </Transition.Child>
        </HeadlessDialog>
      </Transition>
    </>
  );
}

ModalImage.propTypes = {
  openButton: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
