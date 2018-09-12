import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './md.module.css';
import Layout from './Layout';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';
import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <BlogPostPage>
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
      </BlogPostPage>
    </Layout>
  );
};

const BlogPostPage = styled.div`
  margin: 0em auto;
  max-width: 800px;
  padding: 0em 2em;
`;

const BlogPostTitle = styled(Title1)`
  margin: 1em 0em 0.125em 0em;
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
