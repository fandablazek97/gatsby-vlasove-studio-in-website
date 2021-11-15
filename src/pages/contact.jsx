import React from "react";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";
import ContactForm from "../components/forms/ContactForm";

export default function ContactPage() {
  return (
    <Layout>
      <Seo
        title="Kontakt"
        description="Výchozí předpřipravený kontaktní formulář, který lze snadno vizuálně upravit a k jeho plné funkčnosti stačí doplnit údaje do funkce z email-js."
        keywords=""
      />

      {/* Main content */}
      <Hero
        title="Kontaktujte nás"
        subtitle="Výchozí předpřipravený kontaktní formulář, který lze snadno vizuálně upravit a k jeho plné funkčnosti stačí doplnit údaje do funkce z email-js."
      />

      <div className="ui-wrapper-sm pt-16 pb-24">
        <h2 className="ui-heading text-h2">Kontaktní formulář</h2>
        <ContactForm />
      </div>
    </Layout>
  );
}
