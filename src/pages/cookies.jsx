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
      <Seo title="Zásady používání cookies" description="" keywords="" />

      {/* Main content */}
      <Hero title="Zásady používání cookies" />

      <div className="ui-wrapper-sm pt-6 pb-32">
        <CookiesPolicy
          domain="vlasovestudioin.cz"
          ownerName="Simona Michlová"
          adress="Plzeň 1, Bolevec, U Velkého rybníka 951/28"
          ico="71566805"
          validTime="šest měsíců"
          lastUpdate="1. 12. 2021"
        />
      </div>
    </Layout>
  );
}
