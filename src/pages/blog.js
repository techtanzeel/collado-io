import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import BlogPost from '../components/BlogPost';

const Blog = ({ data }) => {
  const Blogs = data.allMarkdownRemark.edges;

  const BlogsList = Blogs
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      <BlogPost
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        // tags={edge.node.frontmatter.tags}
        title={edge.node.frontmatter.title}
      />));

  return (
    <Layout>
      <PageHeader
        title="Blog"
        tagline="Things I've Written"
      />
      {BlogsList}
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
            tags
            title
          }
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            date: PropTypes.string,
            excerpt: PropTypes.string,
            path: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
            title: PropTypes.string,
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default Blog;
