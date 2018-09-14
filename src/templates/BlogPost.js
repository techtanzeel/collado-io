import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './md.module.css';
import Layout from './Layout';

import {
  Title1, MetaText,
} from '../utils/theme';

const BlogPost = ({ data }) => {
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
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

const BlogPostTitle = styled(Title1)`
  margin-bottom: 0.25em;
`;

export const blogPostQuery = graphql`
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

BlogPost.propTypes = {
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

export default BlogPost;
