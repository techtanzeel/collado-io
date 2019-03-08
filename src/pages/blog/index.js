import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { Header } from '../../components/Header';
import { BlogCard } from '../../components/BlogCard';

const BlogPage = ({ data }) => {
  const BlogData = data.allMarkdownRemark.edges;
  const BlogList = BlogData
    // Get md files
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      // Generate a feed of BlogPosts
      <BlogCard
        key={edge.node.id}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
        excerpt={edge.node.frontmatter.excerpt}
        date={edge.node.frontmatter.date}
      />
    ));

  return (
    <Layout>
      <Header tagline="Things I've Written" title="Blog" />
      {BlogList}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" } }
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            path
            title
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              excerpt: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
            })
          })
        })
      )
    })
  }).isRequired
};

export default BlogPage;
