import React from "react";

// Fonts
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

// Main style
import "../styles/Main.css";

// Components
import GlobalHead from "./GlobalHead";
import Navbar from "../components/global/Navbar";
import FloatingButton from "../components/global/FloatingButton";
import CookiesConsentBar from "../components/legal/CookiesConsentBar";
import Footer from "../components/global/Footer";

export default function Layout({ children }) {
  return (
    <>
      <GlobalHead />
      <Navbar />
      <main>{children}</main>
      <FloatingButton />
      <CookiesConsentBar />
      <Footer />
    </>
  );
}
