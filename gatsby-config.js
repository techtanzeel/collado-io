module.exports = {
  siteMetadata: {
    title: 'Marc\'s Website',
    author: 'Marc Collado',
    description: 'Marc Collado Personal Website.',
    siteUrl: 'https://collado.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown',
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: false,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    // Images
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // Styles and Typography
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
