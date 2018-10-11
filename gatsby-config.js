module.exports = {
  siteMetadata: {
    title: 'Marc\'s Website',
    author: 'Marc Collado',
    description: 'Marc Collado Personal Website.',
    siteUrl: 'https://collado.io',
  },
  plugins: [
    // React helmet
    'gatsby-plugin-react-helmet',

    // Source filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'home',
        path: `${__dirname}/src/pages/home`,
      },
    },
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
        name: 'now',
        path: `${__dirname}/src/pages/now`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'work',
        path: `${__dirname}/src/pages/work`,
      },
    },

    // Markdown parser
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: false,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,

    // Image processing
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Styles and typography
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
