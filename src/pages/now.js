import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import NowPost from '../components/NowPost';
import PageHeader from '../components/PageHeader';
import Layout from '../templates/Layout';
import styles from '../templates/md.module.css';

const Now = ({ data }) => {
  const Nows = data.allMarkdownRemark.edges;

  const NowHeader = Nows
    .filter(edge => edge.node.frontmatter.date === null)
    .map(edge => edge.node.html);

  const NowsList = Nows
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <NowPost
        key={edge.node.id}
        title={edge.node.frontmatter.title}
        date={edge.node.frontmatter.date}
        html={edge.node.html}
      />
    ));

  return (
    <Layout>
      <PageHeader
        title="Now"
        tagline="Things I'm Doing"
      />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: NowHeader }}
      />
      {NowsList}
    </Layout>
  );
};

export const nowQuery = graphql`
  query nowQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(now)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

Now.propTypes = {};

export default Now;
