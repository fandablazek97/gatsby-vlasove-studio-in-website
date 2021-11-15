import React from "react";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";
import GdprPolicy from "../components/legal/GdprPolicy";

export default function gdprPage() {
  return (
    <Layout>
      <Seo
        title="Ochrana osobních údajů"
        description="Template pro stránku zpracování osobních údajů. Pro vyplnění údajů klienta stačí přepsat / doplnit props u komponenty GdprText."
        keywords=""
      />

      {/* Main content */}
      <Hero title="Zásady používání cookies" />

      <div className="ui-wrapper-sm pt-20 pb-32">
        <GdprPolicy
          ownerName="František Blažek"
          ico="06345204"
          adress="Honezovice 127, 333 01 Stod"
          email="info@reveal.cz"
          phone="+420 737 090 913"
          takesEffectDate="10. 11. 2021"
        />
      </div>
    </Layout>
  );
}
