const path = require('path');
const _ = require('lodash');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);
  const categoriesTemplate = path.resolve(`src/templates/Categories.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              categories
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // create post pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
        },
      });
    });

    let categories = [];
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.categories')) {
        categories = categories.concat(edge.node.frontmatter.catagories);
      }
    });
    // eliminate duplicate categories
    categories = _.uniq(categories);

    // make tag pages
    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}/`,
        component: categoriesTemplate,
        context: {
          categories,
        },
      });
    });
  });
};
