module.exports = {
  // Site Metadata
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    author: `@revealcz`,
    title: "Gatsby Reveal UI",
    description: `React starter se základním nastavením a komponenty pro rychlý start nového reveal projektu.`,
  },

  plugins: [
    // Gatsby Manifest (generating favicon and more advanced meta tags in head)
    // -> https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `gatsby-reveal-ui`,
        short_name: `reveal`,
        start_url: `/`,
        icon: "src/static/images/favicon.png",
      },
    },

    // Anchor links: https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 800,
      },
    },

    // File system: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/static/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    // Postcss: https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/
    "gatsby-plugin-postcss",

    // Gatsby plugin image (and other needed plugins)
    // -> General: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    // -> Static image: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // React helmet: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    "gatsby-plugin-react-helmet",

    // Sitemap: https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
    "gatsby-plugin-sitemap",
  ],
};
