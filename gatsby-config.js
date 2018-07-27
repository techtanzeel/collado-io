module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/public/markdown`,
        name: 'markdown',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
