import React from "react";
// import { Link } from "gatsby";

// Components
import SocialIcons from "./SocialIcons";
import RevealBadge from "./RevealBadge";

export default function Footer() {
  return (
    <footer className="footer bg-gray-800">
      <div className="ui-wrapper-lg py-12 flex flex-col justify-center text-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center md:text-left md:space-x-10">
        <span className="block text-white self-center">
          Copyright © {new Date().getFullYear()} vlasovestudioin.cz
        </span>
        <SocialIcons className="self-center" />
        {/* <Link
          to="/cookies"
          className="ui-link-2 text-white font-normal self-center"
        >
          Cookies
        </Link> */}
        <RevealBadge />
      </div>
    </footer>
  );
}
