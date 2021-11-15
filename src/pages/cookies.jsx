import React from "react";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";
import CookiesPolicy from "../components/legal/CookiesPolicy";

export default function cookiesPage() {
  return (
    <Layout>
      <Seo
        title="Hlavní stránka"
        description="Template pro stránku zpracování osobních údajů. Pro vyplnění údajů klienta stačí přepsat / doplnit props u komponenty GdprText."
        keywords=""
      />

      {/* Main content */}
      <Hero title="Zásady používání cookies" />

      <div className="ui-wrapper-sm pt-6 pb-32">
        <CookiesPolicy
          domain="reveal.cz"
          ownerName="František Blažek"
          adress="Honezovice 127, 333 01 Stod"
          ico="06345204"
          validTime="šest měsíců"
          lastUpdate="10. 11. 2021"
        />
      </div>
    </Layout>
  );
}
