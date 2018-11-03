import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import TagList from './TagList';
import styles from '../utils/md.module.css';
import { Title1, MetaText } from '../utils/theme';

const BlogPostPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <BlogPostTitle>
        {frontmatter.title}
      </BlogPostTitle>
      <MetaText>
        {`Published on ${frontmatter.date}`}
      </MetaText>
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <hr />
      <TagList
        tags={frontmatter.tags}
      />
    </Layout>
  );
};

const BlogPostTitle = styled(Title1)`
  margin-bottom: 0.25em;
`;

export const query = graphql`
  query blogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;

BlogPostPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(
          PropTypes.string,
        ),
      }),
    }),
  }).isRequired,
};

export default BlogPostPage;
