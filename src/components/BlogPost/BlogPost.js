import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './BlogPost.module.css';
import Layout from '../Layout';
import { PublishedAt } from '../PublishedAt';
import { Tag } from '../Tag';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, tags } = frontmatter;
  return (
    <Layout title={title}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <hr />
      <div className={styles.meta}>
        <PublishedAt date={date} />
        <h3>Tags</h3>
        <div className={styles.tag__container}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
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

BlogPost.propTypes = {
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

export default BlogPost;
