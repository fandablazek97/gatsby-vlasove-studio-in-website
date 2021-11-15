import React from "react";
import { Link } from "gatsby";

// Components
import RevealBadge from "./RevealBadge";

export default function Footer() {
  return (
    <footer className="footer border-t border-default border-opacity-20">
      <div className="ui-wrapper-lg w-screen py-12 flex flex-col justify-center text-center space-y-5 md:flex-row md:justify-between md:items-center md:text-left md:space-x-10">
        <p className="text-default self-center md:mr-auto">
          Copyright © {new Date().getFullYear()} reveal.cz
        </p>
        <Link
          to="/cookies"
          className="ui-link-2 text-default font-normal self-center"
        >
          Cookies
        </Link>
        <Link
          to="/gdpr"
          className="ui-link-2 text-default font-normal self-center"
        >
          Zpracování osobních údajů
        </Link>
        <RevealBadge />
      </div>
    </footer>
  );
}
