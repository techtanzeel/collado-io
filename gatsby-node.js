const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);
    // const categoriesTemplate = path.resolve(`src/templates/Categories.js`);
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        // Create pages for each markdown file
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            layout: `index`,
            context: {
              // can be used in blogPostTemplate as a GraphQL variable
              // to query for data from the markdown file
            },
          });
        });
      }),
    );
  });
};

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
