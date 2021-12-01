import React from "react";

// Icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialIcons({ className = "" }) {
  return (
    <div
      className={`social-icons flex space-x-7 text-2xl no-underline ${className}`}
    >
      <a
        href="https://www.instagram.com/reveal.cz/"
        target="blank"
        rel="me external"
        aria-label="facebook"
        className="text-white p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaFacebookF aria-label="facebook" />
      </a>
      <a
        href="https://www.instagram.com/reveal.cz/"
        target="blank"
        rel="me external"
        aria-label="instagram"
        className="text-white p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaInstagram aria-label="instagram" />
      </a>
    </div>
  );
}
