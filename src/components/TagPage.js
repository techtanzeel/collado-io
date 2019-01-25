import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogPostLink from './BlogPostLink';
import Button from './Button';
import Layout from './Layout';
import PageHeader from './PageHeader';
// import { mobile, tablet, desktop } from '../utils/breakpoints';
import { Title3 } from '../utils/theme';

const TagPage = ({ pageContext, data }) => {
  const Blogs = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;

  const TagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const BlogsList = Blogs.filter((edge) => !!edge.node.frontmatter.date).map(
    (edge) => (
      <BlogPostLink
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
      />
    )
  );

  return (
    <Layout>
      <PageHeader title={`This is ${tag}`} tagline="The blog, filtered" />
      <Title3>{TagHeader}</Title3>
      {BlogsList}
      <ButtonContainer>
        <Button href="/tags" theme="dark">
          View all tags
        </Button>
      </ButtonContainer>
    </Layout>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const query = graphql`
  query tagPageQuery($tag: String) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(src)/(markdown)/(blog)/" }
        frontmatter: { tags: { in: [$tag] } }
      }
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

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string
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
              title: PropTypes.string
            })
          })
        })
      )
    })
  }).isRequired
};

export default TagPage;
