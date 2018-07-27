import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import PostLink from '../components/PostLink';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <div>
        {Posts}
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

export default IndexPage;
