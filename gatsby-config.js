module.exports = {
  siteMetadata: {
    title: `Diogo Cardoso`,
    description: `Full-stack web developer based in Portugal. Masters in Electrical Engineering - Automation.`,
    author: `Diogo Cardoso`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
          {
            family: `Open Sans`,
            subsets: [`latin`],
            variants: [`400`, `700`],
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
