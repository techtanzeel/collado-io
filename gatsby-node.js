const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);
    const tagTemplate = path.resolve(`src/templates/Tag.js`);

    resolve(
      graphql(`
        {
          blogPosts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(markdown)/" } }
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const posts = result.data.blogPosts.edges;

        posts.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {},
          });
        });

        let allTags = [];

        posts.forEach(({ node }) => {
          allTags = allTags.concat(node.frontmatter.tags);
        });

        const uniqTags = [...new Set(allTags)];

        uniqTags.forEach(tag => {
          createPage({
            path: `/tags/${tag}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });
      }),
    );
  });
};
