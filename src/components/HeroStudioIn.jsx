import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Icons
import { HiArrowDown } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function HeroStudioIn() {
  return (
    <header className="w-screen h-screen min-h-500 lg:min-h-600 relative overflow-hidden">
      {/* inner content */}
      <div className="ui-wrapper h-full pt-24 pb-16 xs:pb-28 sm:pb-16 flex flex-col items-start justify-center relative z-10">
        <h1 className="ui-heading mt-auto font-serif font-light text-3xl sm:text-5xl lg:text-7xl text-white">
          Vlasové studio IN
        </h1>
        <p className="ui-lead text-white">
          Profesionální dámské i pánské kadeřnické služby a vlasové poradenství
          v centru Plzně. Dopřejte svým vlasům tu nejkvalitnější péči. U nás v
          kadeřnictví využíváme nejkvalitnější kosmetiku od značek Wella a
          L’Oréal.
        </p>
        <AnchorLink
          to="/#o-nas"
          className="justify-self-end mt-auto p-2 border-2 border-white transition-colors duration-default bg-transparent text-white hover:text-gray-900 focus:text-gray-950 hover:bg-white focus:bg-white"
        >
          <HiArrowDown className="text-2xl" />
        </AnchorLink>
      </div>

      {/* Socials icons */}
      <div className="flex flex-col space-y-8 absolute bottom-16 xs:bottom-28 sm:bottom-16 right-8 md:right-12 lg:right-16 z-20">
        <a
          href="https://www.facebook.com/kadernickysalonTWIN"
          target="_blank"
          rel="noreferrer me external"
          aria-label="facebook"
          className="text-3xl text-white p-2 hover:opacity-60 transition-opacity duration-default"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/vlasovestudio_in/"
          target="_blank"
          rel="noreferrer me external"
          aria-label="instagram"
          className="text-3xl text-gray-200 p-2 hover:opacity-60 transition-opacity duration-default"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Photo */}
      <div className="absolute top-0 bottom-0 left-0 xl:left-8 2xl:left-16 right-0 w-full h-full -z-10">
        <StaticImage
          as="div"
          src="../static/images/hlavni-fotky/studio-in-9.jpg"
          alt="Prostory našeho kadeřnictví"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="50% 50%"
          placeholder="blurred"
          loading="lazy"
          formats={["avif", "webp"]}
          className="w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 bottom-0 left-0 xl:left-8 2xl:left-16 right-0 w-full h-full bg-gray-950 z-0 opacity-60"></div>
    </header>
  );
}
