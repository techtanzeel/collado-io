import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import PostLink from '../components/PostLink';

const IndexPage = ({ data }) => {
  const Posts = data.allMarkdownRemark.edges;
  const PostsList = Posts
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <div>
        {PostsList}
      </div>
      <Link to="/page-2/">
        Go to page 2
      </Link>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
          frontmatter: PropTypes.shape({
            date: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default IndexPage;
