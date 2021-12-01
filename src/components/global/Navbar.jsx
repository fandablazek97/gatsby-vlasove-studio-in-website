// NAVBAR
// BUG - při otevření menu a roztažení okna na velikost desktopu a větší
// zmizí křížek a navigace nejde zavřít -> v podstatě nemá vliv na reálnou funkčnost

import React, { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

// Hooks & utils
import useScrollListener from "../../hooks/useScrollListener";
import { isBrowser } from "../../hooks/utils/isBrowser";

// Components
import SocialIcons from "./SocialIcons";

// Logo značky
// import brand from "../../static/svg/brand.svg";

export default function Navbar() {
  // Generované odkazy (upravit zde)
  const navLinks = [
    {
      path: "/#o-nas",
      title: "O nás",
    },
    {
      path: "/#sluzby",
      title: "Služby",
    },
    {
      path: "/#cenik",
      title: "Ceník",
    },
    {
      path: "/#kadernice",
      title: "Kadeřnice",
    },
    {
      path: "/#kontakt",
      title: "Kontakt",
    },
  ];

  // State
  const [menuOpen, setMenuOpen] = useState(false); // Otevření / zavření menu po kliknutí na burger tlačítko
  const [navbarVisible, setNavbarVisible] = useState(true); // Skrývá / ukazuje navbar během scrollování

  // Přepnutí otevření / zavření menu
  // funkci spouští kliknutí na burger tlačítko
  const menuToggle = () => {
    if (isBrowser) {
      setMenuOpen(!menuOpen);
      document.body.classList.toggle("scroll-lock");
    }
  };

  // Zavření menu (funkci spouští kliknutí na odkaz nebo logo v otevřeném menu)
  const menuClose = () => {
    if (isBrowser) {
      setMenuOpen(false);
      document.body.classList.remove("scroll-lock");
      window.scrollTo(0, 0);
    }
  };

  // Stavy navigace při scrollování
  const scroll = useScrollListener();

  useEffect(() => {
    // Skryje / ukáže navigaci na základě podmínky
    if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      role="navigation"
      className={`navbar bg-gray-800 w-screen h-24 fixed z-100 top-0 ${
        navbarVisible ? "navbar--visible" : "navbar--hidden"
      }`}
    >
      {/* Vnitřní wrapper -> vnitřní šířku lze změnit přepsáním velikosti wrapperu zde */}
      <div className="ui-wrapper-lg h-full flex justify-between items-center">
        {/* Logo navigace */}
        <Link
          to="/"
          onClick={menuClose}
          className="mr-auto lg:mr-10 xl:mr-16 z-10 font-serif font-light text-left text-xl text-white"
        >
          Vlasové studio IN
        </Link>

        {/* Hlavní linky desktop navigace */}
        <ul className="text-xs xl:text-sm uppercase space-x-6 xl:space-x-8 hidden lg:flex mr-auto">
          {navLinks.map((link) => (
            <li key={link.title}>
              <AnchorLink
                to={link.path}
                stripHash
                className="ui-link font-serif font-thin text-gray-200 tracking-widest"
              >
                {link.title}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:inline-flex items-center">
          <span className="hidden xl:block text-sm text-gray-200 font-serif uppercase mr-5 tracking-widest">
            Objednejte se:
          </span>
          <a
            href="tel:+420123456789"
            className="ui-button text-white self-center"
            variant="outline"
          >
            <span>+420 123 456 789</span>
          </a>
        </div>

        {/* Burger tlačítko -> viditelné pouze na tabletu a mobilu */}
        <button
          onClick={menuToggle}
          className={`navbar__opener z-10 p-2 lg:hidden ${
            menuOpen ? "navbar__opener--active" : ""
          }`}
          aria-haspopup="menu"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls="mobile-menu-list"
          aria-label="Otevřít menu"
        >
          <span className="sr-only">Menu</span>
          <div id="opener-1" className="bg-white"></div>
          <div id="opener-2" className="bg-white"></div>
          <div id="opener-3" className="bg-white"></div>
        </button>

        {/* Otevírací menu -> pro tablet a telefon */}
        <div
          className={`navbar__menu w-screen h-screen p-24 pb-40 fixed inset-0 flex flex-col items-center justify-between ${
            menuOpen ? "navbar__menu--active" : ""
          }`}
        >
          <ul
            className="navbar__menu__list flex flex-col text-center uppercase text-xl space-y-5 mb-10"
            id="mobile-menu-list"
          >
            {navLinks.map((link) => (
              <li key={link.title}>
                <AnchorLink
                  to={link.path}
                  stripHash
                  onAnchorLinkClick={menuClose}
                  className="ui-link-2 text-gray-200 font-bold"
                >
                  {link.title}
                </AnchorLink>
              </li>
            ))}

            <li>
              <a
                href="tel:+420123456789"
                className="ui-link-3 mt-8 text-2xl text-primary font-serif font-thin normal-case"
              >
                +420 123 456 789
              </a>
            </li>
            <li>
              <a
                href="mailto:info@vlasovestudioin.cz"
                className="ui-link-3 text-2xl text-primary font-serif font-thin normal-case"
              >
                Info@vlasovestudioin.cz
              </a>
            </li>
          </ul>

          <SocialIcons />
        </div>
      </div>
    </nav>
  );
}
