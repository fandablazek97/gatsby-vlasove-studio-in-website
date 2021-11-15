import React, { Fragment } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";

function Tabs({ children }) {
  const tabs = children.map((child) => (
    // Konkrétní Tab (záložka)
    <HeadlessTab as={Fragment} key={child.props.title}>
      {({ selected }) => (
        <button
          className={`py-3 px-6 font-semibold rounded-default transition duration-default ${
            selected
              ? "text-default-strong bg-background-300 bg-opacity-70 dark:bg-background-200 dark:bg-opacity-100"
              : "text-default opacity-70 hover:text-default-strong hover:opacity-100"
          }`}
        >
          <span className="text-sm md:text-base leading-none">
            {child.props.title}
          </span>
        </button>
      )}
    </HeadlessTab>
  ));

  const tabPanel = children.map((child) => (
    // Obsah Tabu
    <HeadlessTab.Panel className="py-6" key={child.props.title}>
      {child.props.children}
    </HeadlessTab.Panel>
  ));
  return (
    <HeadlessTab.Group>
      {/* Kontejner pro všechny Taby */}
      <HeadlessTab.List className="flex justify-start items-center space-x-3 md:space-x-6">
        {tabs}
      </HeadlessTab.List>
      {/* Kontejner pro všechny obsahy každého tabu */}
      <HeadlessTab.Panels>{tabPanel}</HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
}

function Tab(props) {
  return <>{props.children}</>;
}

export { Tabs, Tab };
