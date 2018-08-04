const path = require('path');

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

    // let allCategories = [];

    // posts.forEach(({ node }) => {
    //   allCategories = allCategories.concat(node.frontmatter.catagories);
    // });

    // const uniq = a => [...new Set(a)];
    // const categories = uniq(allCategories);

    // make tag pages
    // categories.forEach(category => {
    //   createPage({
    //     path: `/categories/${category}/`,
    //     component: categoriesTemplate,
    //     context: {
    //       category,
    //     },
    //   });
    // });
  });
};
