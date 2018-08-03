module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/markdown`,
        name: 'markdown',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
  ],
};
