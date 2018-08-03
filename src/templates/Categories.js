import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

const Categories = ({ pathContext, data }) => {
  const { category } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } in the "${category}" category`;

  return (
    <div>
      <h1>
        {categoryHeader}
      </h1>
      <ul>
        {edges.map(({ node }) => {
          const { path, title } = node.frontmatter;
          return (
            <li key={path}>
              <Link to={path}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/categories">
All tags
      </Link>
    </div>
  );
};

Categories.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }).isRequired,
};

export default Categories;

export const pageQuery = graphql`
  query CategoryPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
