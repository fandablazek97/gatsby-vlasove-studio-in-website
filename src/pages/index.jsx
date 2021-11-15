import React from "react";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";

// Icons
import {
  MdAccessibilityNew,
  MdNightlight,
  MdPalette,
  MdFlashOn,
  MdSpeed,
  MdSearch,
} from "react-icons/md";

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Hlavní stránka"
        description="React starter se základním nastavením a komponenty pro rychlý start nového reveal projektu s naším UI."
        keywords="react, javascript, css framework, user interface"
      />

      {/* Main Content */}
      <Hero
        title="Gatsby & Reveal UI"
        subtitle="React starter se základním nastavením a komponenty pro rychlý start nového reveal projektu s naším UI."
      />

      <div className="ui-wrapper pt-20 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="col-span-1 p-10 flex flex-col space-y-6 bg-background-200 rounded-default">
          <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
            <MdSpeed />
          </div>
          <h2 className="ui-heading text-h3">Vysoký výkon</h2>
          <p>
            Celý systém je optimalizovaný tak, aby výsledný produkt dosahoval
            maximálních možných výsledků v měření pageSpeed insights i pocitové
            rychlosti.
          </p>
        </div>

        <div className="col-span-1 p-10 flex flex-col space-y-6 bg-background-200 rounded-default">
          <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
            <MdAccessibilityNew />
          </div>
          <h2 className="ui-heading text-h3">Přístupnost</h2>
          <p>
            Každý komponent je napsaný tak, aby splňoval WAI-ARIA standard pro
            přístupnost na webu. Některé komponenty také využívají Headless UI,
            knihovnu komponent bez stylů se zaměřením na přístupnost.
          </p>
        </div>

        <div className="col-span-1 p-10 flex flex-col space-y-6 bg-background-200 rounded-default">
          <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
            <MdPalette />
          </div>
          <h2 className="ui-heading text-h3">Snadné přizpůsobení</h2>
          <p>
            CSS obsahuje pro každou svou součást sadu proměnných pro rychlé a
            snadné přizpůsobení. Včetně barev a globálních proměnných s efektem
            na celý web.
          </p>
        </div>

        <div className="col-span-1 p-10 flex flex-col space-y-6 bg-background-200 rounded-default">
          <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
            <MdNightlight />
          </div>
          <h2 className="ui-heading text-h3">Dark mode</h2>
          <p>
            Hotová implementace dark modu s přepínačem. Lze samozřejmě použít
            jen jeden barevný režim, nebo lze doplnit o další.
          </p>
        </div>

        <div className="col-span-1 p-10 flex flex-col space-y-6 bg-background-200 rounded-default">
          <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
            <MdFlashOn />
          </div>
          <h2 className="ui-heading text-h3">Rychlý vývoj</h2>
          <p>
            Díky jednoduché a lehce zapomatovatelné syntaxi CSS tříd společně s
            tailwindem je vývoj nového webu rychlý, produktivní a bez zbytečných
            starostí.
          </p>
        </div>

        <div className="col-span-1 p-10 flex flex-col space-y-6 bg-background-200 rounded-default">
          <div className="rounded-full bg-primary p-3 self-start flex items-center justify-center text-2xl text-white">
            <MdSearch />
          </div>
          <h2 className="ui-heading text-h3">Kompletní SEO</h2>
          <p>
            SEO komponent pro snadné vložení meta tagů na stránku důležitých pro
            vyhledávače. Web má také generátor sitemapy a robots.txt.
          </p>
        </div>
      </div>
    </Layout>
  );
}
