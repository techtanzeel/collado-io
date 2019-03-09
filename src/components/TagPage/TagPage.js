import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { BlogCard } from '../BlogCard';

const TagPage = ({ pageContext, data }) => {
  const BlogData = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const TagCount = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const renderCards = BlogData
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
      <Header title={`Tag: ${tag}`} tagline="Like the blog, but filtered" />
      <h3>{TagCount}</h3>
      {renderCards}
    </Layout>
  );
};

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
            title
          }
        }
      }
    }
  }
`;

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
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

export default TagPage;
