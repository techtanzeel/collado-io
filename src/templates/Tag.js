import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from './Layout';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PostList from '../components/PostList';

import {
  Title3,
} from '../utils/theme';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <PageHeader
        title={`This is ${tag}`}
        tagline="The blog, filtered"
      />
      <Title3>
        {tagHeader}
      </Title3>
      <PostList>
        {posts}
      </PostList>
      <Button
        url="/tags"
      >
        View all tags
      </Button>
    </Layout>
  );
};

export const tagPageQuery = graphql`
  query tagPageQuery($tag: String) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(markdown)/" }, frontmatter: { tags: { in: [$tag] } } }
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
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

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              excerpt: PropTypes.string,
              path: PropTypes.string,
              tags: PropTypes.arrayOf(PropTypes.string),
              title: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default Tag;
