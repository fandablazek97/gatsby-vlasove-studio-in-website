import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";

import { MdArrowBack } from "react-icons/md";

export default function cenikPage() {
  return (
    <Layout>
      <Seo
        title="kompletní ceník"
        description=""
        keywords=""
        robotsEnabled={false}
      />

      {/* Main content */}
      <Hero title="Ceník služeb" />

      <div className="ui-wrapper-sm pt-6 pb-32">
        <div className="flex flex-col justify-between items-center p-8 md:p-14 w-full h-auto shadow-xl bg-white">
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Pánský střih + mytí a styling
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              200,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Dětský střih
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              180,-
            </span>
          </div>
          <hr />

          {/* Dámské */}
          <h2 className="ui-heading text-h3 mt-12">Dámské</h2>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Dámský střih
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 450,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Dámská foukaná
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 280,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Barvení + kompletní úprava
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 110,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Melírování + kompletní úprava
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 1200,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Zesvětlení, Baleyage + kompletní úprava
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 1500,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Olaplex
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 800,-
            </span>
          </div>
          <hr />

          {/* Druhy účesů */}
          <h2 className="ui-heading text-h3 mt-12">Společenské účesy</h2>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Svatební účes
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 1500,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Maturitní účes
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              od 700,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Jednoduchý účes (vlny, apod.)
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              500,-
            </span>
          </div>
          <hr />
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
              Dětský střih
            </span>
            <span className="text-2xl md:text-3xl text-default-strong font-serif font-light whitespace-nowrap ml-5">
              180,-
            </span>
          </div>
          <hr />
          <AnchorLink
            to="/#kontakt"
            stripHash
            className="text-gray-800 cursor-pointer text-sm font-semibold uppercase tracking-wider py-4 px-7 mt-6 border-2 border-gray-800 bg-transparent transition-colors duration-default hover:text-white hover:bg-gray-950 a11y-focus text-center"
          >
            Objednat termín
          </AnchorLink>
        </div>
        <div className="w-full my-12">
          <Link
            to="/"
            className="inline-flex w-full cursor-pointer items-center justify-center text-gray-800 font-semibold uppercase tracking-wider py-4 px-7 mt-6 border-2 border-gray-800 bg-transparent transition-colors duration-default hover:text-white hover:bg-gray-950 a11y-focus text-center"
          >
            <MdArrowBack className="mr-2 text-lg" />
            <span>Hlavní stránka</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
