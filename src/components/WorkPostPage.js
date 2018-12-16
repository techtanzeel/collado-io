import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import styles from '../utils/md.module.css';
// import { mobile, tablet, desktop } from '../utils/breakpoints';
import { Title1, Title3, MetaText } from '../utils/theme';

const WorkPostPage = ({ data }) => {
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
    </Layout>
  );
};

const BlogPostTitle = styled(Title1)`
  margin-bottom: 0.25em;
`;

export const query = graphql`
  query workPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

WorkPostPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default WorkPostPage;
