import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import NowPost from '../components/NowPost';
import PageHeader from '../components/PageHeader';
import styles from '../utils/md.module.css';

const Now = ({ data }) => {
  const Nows = data.allMarkdownRemark.edges;
  const NowHeader = Nows
    .filter((edge) => edge.node.frontmatter.date === null)
    .map((edge) => edge.node.html);
  const NowsList = Nows
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      <NowPost
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        html={edge.node.html}
        title={edge.node.frontmatter.title}
      />
    ));

  return (
    <Layout>
      <PageHeader
        tagline="Things I'm Doing"
        title="Now"
      />
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: NowHeader }}
      />
      {NowsList}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(now)/" } }
      limit: 50
      sort: { fields: [frontmatter___date], order: DESC }
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

Now.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            html: PropTypes.string,
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              title: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default Now;
