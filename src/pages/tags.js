import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const TagsPage = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const { group } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet title={title} />
      <div>
        <h1>
          Tags
        </h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {`${tag.fieldValue} (${tag.totalCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default TagsPage;
