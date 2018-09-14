import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PostLink from '../components/PostLink';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

const Tag = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const Posts = data.allMarkdownRemark.edges;
  const PostsList = Posts
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <PostLink
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        tags={edge.node.frontmatter.tags}
        title={edge.node.frontmatter.title}
      />));

  return (
    <Layout>
      <TagPage>
        <PageHeader
          title={`This is ${tag}`}
          tagline="The blog, filtered"
        />
        <Title2>
          {tagHeader}
        </Title2>
        {PostsList}
        <Button
          url="/tags"
        >
          View all tags
        </Button>
      </TagPage>
    </Layout>
  );
};

const TagPage = styled.div`
  margin: 0em auto;
  max-width: 800px;
  padding: 0em 2em;
`;

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
  pathContext: PropTypes.shape({
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
