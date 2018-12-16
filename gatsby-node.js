const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostPage = path.resolve(`src/components/BlogPostPage.js`);
    const workPostPage = path.resolve(`src/components/WorkPostPage.js`);
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
          },
          workPosts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(work)/" } }
            limit: 100
            sort: { fields: [frontmatter___date], order: DESC }
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
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each blog post
        const posts = result.data.blogPosts.edges;
        posts.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostPage,
            context: {},
          });
        });

        // Create pages for each work post
        const works = result.data.workPosts.edges;
        works.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: workPostPage,
            context: {},
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
            context: {
              tag,
            },
          });
        });
      }),
    );
  });
};
