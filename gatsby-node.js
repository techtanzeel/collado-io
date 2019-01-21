const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostPage = path.resolve(`src/components/BlogPostPage.js`);
    const tagPage = path.resolve(`src/components/TagPage.js`);
    resolve(
      graphql(`
        {
          blogPosts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" } }
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
      `).then((result) => {
        if (result.errors) reject(result.errors);
        // Create pages for each blog post
        const posts = result.data.blogPosts.edges;
        posts.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostPage,
            context: {}
          });
        });
        // List all the tags found in the blog posts
        let allTags = [];
        posts.forEach(({ node }) => {
          allTags = [...allTags, ...node.frontmatter.tags];
        });
        const uniqTags = [...new Set(allTags)];
        uniqTags.forEach((tag) => {
          createPage({
            path: `/tags/${tag}/`,
            component: tagPage,
            context: { tag }
          });
        });
      })
    );
  });
};
