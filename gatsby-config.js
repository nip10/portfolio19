module.exports = {
  siteMetadata: {
    title: `Diogo Cardoso`,
    description: `Full-stack web developer based in Portugal. Masters in Electrical Engineering - Automation.`,
    author: `Diogo Cardoso`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diogo Cardoso`,
        short_name: `DC`,
        start_url: `/`,
        background_color: `#f0db4f`,
        theme_color: `#f0db4f`,
        display: `standalone`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`],
            variants: ['400', '700'],
          },
          // {
          //   family: `Open Sans`,
          //   subsets: [`latin`],
          //   variants: [`400`, `700`],
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136029200-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    'gatsby-plugin-offline',
  ],
};
