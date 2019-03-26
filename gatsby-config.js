module.exports = {
  siteMetadata: {
    title: 'Marc Collado',
    titleTemplate: 'Marc Collado — %s',
    shortName: 'Marc',
    author: 'Marc Collado',
    siteLanguage: 'en',
    image: '/static/img/marc-collado.jpg',
    description:
      'Marc Collado Personal Website. Product Manager @ Ironhack. Co-founder @ iomando. Industrial Engineer. Programmer aficionado. Avid runner.',
    siteUrl: 'https://www.collado.io',
    twitter: '@MarcCollado'
  },
  plugins: [
    // Source filesystem
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: `${__dirname}/src/markdown/home`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/markdown/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'now',
        path: `${__dirname}/src/markdown/now`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/src/markdown/work`
      }
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
              quality: 75
            }
          },

          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              related: false,
              noIframeBorder: true
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },

    // Image processing
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    'gatsby-transformer-sharp',

    // Utils & Helpers
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131366514-1',
        respectDNT: true
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cms'
  ]
};
