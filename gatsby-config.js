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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
