import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function HeadlessModal({ button, ariaTitle, ariaDescription }) {
  let [isOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Opening button */}
      <button onClick={openModal}>{button}</button>

      {/* Transition wrapper */}
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {/* Main Component */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          {/* Overlay */}
          <Transition.Child
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-950 opacity-40" />
          </Transition.Child>

          {/* A11y */}
          <Dialog.Title>{ariaTitle}</Dialog.Title>
          <Dialog.Description>{ariaDescription}</Dialog.Description>

          {/* Modal content */}
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog>
      </Transition>
    </>
  );
}
