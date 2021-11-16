// Vytvořeno pomocí Headless UI
// Dokumentace ke komponentu: https://headlessui.dev/react/popover
// Transition komponent dokumentace: https://headlessui.dev/react/transition

import React, { Fragment } from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

// Icons
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Popover({ title, children }) {
  return (
    <HeadlessPopover className="relative">
      {({ open }) => (
        <Fragment>
          <HeadlessPopover.Button
            className={`px-6 py-2 inline-flex items-center text-default-strong font-medium bg-background-300 rounded-default ${
              open ? "bg-background-200" : ""
            }`}
          >
            <span>{title}</span>
            <HiOutlineChevronDown className="ml-2" />
          </HeadlessPopover.Button>

          <Transition
            as={Fragment}
            enter="transition ease duration-default"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <HeadlessPopover.Panel className="absolute z-10 mt-2 p-5 w-auto min-w-[300px] max-w-sm rounded-default shadow-lg bg-white dark:bg-gray-700">
              {children}
            </HeadlessPopover.Panel>
          </Transition>
        </Fragment>
      )}
    </HeadlessPopover>
  );
}

Popover.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
