module.exports = {
  siteMetadata: {
    title: 'Marc Collado',
    titleTemplate: 'Marc Collado — %s',
    shortName: 'Marc',
    author: 'Marc Collado',
    siteLanguage: 'en',
    image: '/static/img/marc-collado.jpg',
    description: 'Marc Collado personal website',
    url: 'https://www.collado.io',
    twitter: '@MarcCollado',
  },
  plugins: [
    // Source filesystem
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: `${__dirname}/src/markdown/home`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/markdown/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'now',
        path: `${__dirname}/src/markdown/now`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/src/markdown/work`,
      },
    },

    // Markdown parser
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
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

    // Image processing
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // Styles & Typography
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },

    // Utils & Helpers
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
  ],
};
