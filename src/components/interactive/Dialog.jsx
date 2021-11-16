// Vytvořeno pomocí Headless UI
// Dokumentace ke komponentu: https://headlessui.dev/react/dialog
// Transition komponent dokumentace: https://headlessui.dev/react/transition

import React, { useState, Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

export default function Dialog({
  openButton,
  title,
  description,
  closeButton,
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
      <button type="button" onClick={openDialog}>
        {openButton}
      </button>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <HeadlessDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-200 overflow-y-auto"
        >
          {/* Overlay */}
          <HeadlessDialog.Overlay className="fixed inset-0 w-screen h-screen" />

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
            <div className="fixed z-250 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-md p-8 overflow-hidden bg-background dark:bg-background-200 shadow-lg rounded-xl">
              {/* Nadpis */}
              <HeadlessDialog.Title as="h3" className="ui-heading text-h3">
                {title}
              </HeadlessDialog.Title>

              {/* Text */}
              <HeadlessDialog.Description>
                {description}
              </HeadlessDialog.Description>

              {/* Tlačítko pro zavření modalu */}
              <button
                type="button"
                onClick={closeDialog}
                className="mt-8 outline-none"
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

Dialog.propTypes = {
  openButton: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeButton: PropTypes.node.isRequired,
};
