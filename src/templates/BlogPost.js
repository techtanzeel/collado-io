import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './BlogPost.module.css';
import Layout from './Layout';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

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
          {`Published on ${frontmatter.date} `}
          <a href={frontmatter.path}>
            🔗
          </a>
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
  padding: 0em 2em;
`;

const BlogPostTitle = styled.h1`
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  margin: 1em 0em 0.125em 0em;
  text-transform: uppercase;
`;

const MetaText = styled.p`
  color: ${fakeAsbestos};
  font-size: 0.8em;
  opacity: 0.5;
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
