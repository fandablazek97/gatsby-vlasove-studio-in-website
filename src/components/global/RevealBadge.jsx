import React from "react";

// Logo
import RevealLogo from "../../static/images/reveal-white-logo.svg";

export default function RevealBadge() {
  return (
    <a
      href="https://reveal.cz"
      target="_blank"
      rel="noreferrer author external"
      className="text-white text-xs tracking-wider font-bold py-3 px-5 rounded-md bg-gray-950 self-center my-2"
    >
      <img
        src={RevealLogo}
        alt="Logo autora webu"
        width="10"
        height="10"
        className="inline mr-3 transform -translate-y-0.5"
      />
      <span>Vytvořili Reveal</span>
    </a>
  );
}
