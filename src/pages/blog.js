import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostLink from '../components/PostLink';
import Layout from '../templates/Layout';

const Blog = ({ data }) => {
  const Posts = data.allMarkdownRemark.edges;
  const PostsList = Posts
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <BlogPage>
        {PostsList}
      </BlogPage>
    </Layout>
  );
};

const BlogPage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2em;
`;

export const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
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
          excerpt: PropTypes.string,
          id: PropTypes.string,
          totalCount: PropTypes.number,
          frontmatter: PropTypes.shape({
            date: PropTypes.string,
            path: PropTypes.string,
            title: PropTypes.string,
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default Blog;
