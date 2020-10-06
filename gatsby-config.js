module.exports = {
  siteMetadata: {
    title: 'Wildwood 2020',
    description: 'Australia`s Toughest Enduro Race',
    siteUrl: 'https://wildwoodrockextreme.com',
    author: 'Mark Steven',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `MDB starter`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/mdb-react-small.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
