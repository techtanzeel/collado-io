import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import styles from './BlogPost.module.css';

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="container">
      <Navbar />
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

    </div>
  );
}

const BlogPostPage = styled.div`
  padding: 0em 2em;
`;

const BlogPostTitle = styled.h1`
  color: #2A2E2E;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-top: 1em;
  text-transform: uppercase;
`;

const MetaText = styled.p`
  color: #525555;
  font-size: 0.8em;
  opacity: 0.5;
`;

export const blogPostQuery = graphql`
  query blogPostByPath($path: String!) {
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
