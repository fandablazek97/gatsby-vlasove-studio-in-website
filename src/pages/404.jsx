import * as React from "react";
import { Link } from "gatsby";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Stránka nenalezena" description="" keywords="" />

      {/* Main content */}
      <header className="w-screen h-screen relative min-h-600 bg-background-100">
        <div className="ui-wrapper h-full flex flex-col justify-center items-center">
          <span className="ui-heading text-h1">&#128531;</span>
          <h1 className="ui-heading text-primary text-3xl sm:text-5xl lg:text-6xl">
            Stránka nenalezena
          </h1>
          <p className="ui-lead text-center mb-16">
            Ještě nikam neutíkejte! Vypadá to že stránka, kterou se pokoušíte
            nalézt již neexistuje, nebo byla přesunuta. Kliknutím na tlačítko
            snadno přejdete na hlavní stránku.
          </p>
          <Link
            to="/"
            className="ui-button"
            variant="flat-expand"
            data-size="lg"
          >
            <span>Hlavní stránka</span>
          </Link>
        </div>
      </header>
    </Layout>
  );
}
