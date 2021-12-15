import React from "react";

// Logo
import RevealLogo from "../../static/svg/reveal-badge-logo.svg";

export default function RevealBadge({ className }) {
  return (
    <a
      href="https://reveal.cz"
      target="_blank"
      rel="noreferrer author external"
      className={`text-white text-xs tracking-wider min-w-[161px] font-bold py-3 px-5 rounded-md bg-gray-950 self-center my-2 ${className}`}
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
