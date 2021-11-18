// NAVBAR
// BUG - při otevření menu a roztažení okna na velikost desktopu a větší
// zmizí křížek a navigace nejde zavřít -> v podstatě nemá vliv na reálnou funkčnost

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

// Hooks & utils
import useScrollListener from "../../hooks/useScrollListener";
import { isBrowser } from "../../hooks/utils/isBrowser";

// Components
import SocialIcons from "./SocialIcons";
import ThemeToggler from "./ThemeToggler";

// Logo značky
import brand from "../../static/images/brand.svg";

export default function Navbar() {
  // Generované odkazy (upravit zde)
  const navLinks = [
    {
      path: "/",
      title: "Domů",
    },
    {
      path: "/revealui",
      title: "Reveal UI",
    },
    {
      path: "/react",
      title: "React",
    },
    {
      path: "/contact",
      title: "Kontakt",
    },
  ];

  // State
  const [menuOpen, setMenuOpen] = useState(false); // Otevření / zavření menu po kliknutí na burger tlačítko
  const [navbarScrolled, setNavbarScrolled] = useState(false); // Scrollnutý stav (styl) navigace
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
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }

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
      className={`navbar w-screen h-20 sm:h-28 fixed z-100 top-0 ${
        navbarScrolled ? "bg-background navbar--is-scrolled" : ""
      } ${navbarVisible ? "navbar--visible" : "navbar--hidden"}`}
    >
      {/* Vnitřní wrapper -> vnitřní šířku lze změnit přepsáním velikosti wrapperu zde */}
      <div className="ui-wrapper-lg h-full flex justify-between items-center">
        {/* Logo navigace */}
        <Link to="/" onClick={menuClose} className="mr-auto w-24 h-10 z-10">
          <img
            src={brand}
            alt="Logo značky"
            width="96"
            height="40"
            className="w-full h-full dark:filter dark:invert"
          />
        </Link>

        {/* Hlavní linky desktop navigace */}
        <ul className="text-sm uppercase space-x-8 xl:space-x-12 hidden lg:flex mr-6 xl:mr-10">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link to={link.path} className="ui-link-2 text-default-strong">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggler className="mr-6 xl:mr-10" />

        <a
          href="tel:+420737090913"
          className="ui-link-3 text-h4 text-primary hidden lg:inline-flex self-center"
        >
          +420 737 090 913
        </a>

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
          <div id="opener-1" className="bg-default-strong"></div>
          <div id="opener-2" className="bg-default-strong"></div>
          <div id="opener-3" className="bg-default-strong"></div>
        </button>

        {/* Otevírací menu -> pro tablet a telefon */}
        <div
          className={`navbar__menu w-screen h-screen p-20 pb-40 fixed inset-0 flex flex-col items-center justify-between ${
            menuOpen ? "navbar__menu--active" : ""
          }`}
        >
          <ul
            className="navbar__menu__list flex flex-col text-center uppercase text-h4 sm:text-h3 space-y-3 mb-10"
            id="mobile-menu-list"
          >
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.path}
                  onClick={menuClose}
                  className="ui-link-2 text-default-strong font-bold"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="tel:+420737090913"
                className="ui-link-3 mt-6 text-h4 sm:text-h3 text-primary font-semibold normal-case"
              >
                +420 737 090 913
              </a>
            </li>
            <li>
              <a
                href="mailto:info@reveal.cz"
                className="ui-link-3 text-h4 sm:text-h3 text-primary font-semibold normal-case"
              >
                Info@reveal.cz
              </a>
            </li>
          </ul>

          <SocialIcons />
        </div>
      </div>
    </nav>
  );
}
