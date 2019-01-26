import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from './Layout';
import BlogPostTags from './BlogPostTags';
import styles from '../utils/md.module.css';

const BlogPostPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <h1 style={{ margin: '0.25em 0 0' }}>{frontmatter.title}</h1>
      <p className="meta" style={{ marginTop: '0.5em' }}>
        {`Published on ${frontmatter.date}`}
      </p>
      <div className={styles.md} dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <h3 style={{ marginBottom: 0, textAlign: 'center' }}>Tags</h3>
      <BlogPostTags tags={frontmatter.tags} />
    </Layout>
  );
};

export const query = graphql`
  query blogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;

BlogPostPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired
      })
    })
  }).isRequired
};

export default BlogPostPage;
