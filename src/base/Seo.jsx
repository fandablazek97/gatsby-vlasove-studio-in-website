import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

export default function Seo({
  title = "Název stránky",
  description = "",
  keywords = "",
  thumbnail = "",
}) {
  const siteName = "Vlasové studio IN";

  return (
    <Helmet>
      {/* Global SEO */}
      <title>{`${siteName} | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Social media */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnail} />
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  thumbnail: PropTypes.string,
};
