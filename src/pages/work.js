import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import WorkPost from '../components/WorkPost';
import styles from '../utils/md.module.css';

const Work = ({ data }) => {
  const Works = data.allMarkdownRemark.edges;

  const WorkHeader = Works
    .filter((edge) => edge.node.frontmatter.date === null)
    .map((edge) => edge.node.html);

  const WorksList = Works
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      <WorkPost
        key={edge.node.id}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
      />
    ));

  return (
    <Layout>
      <PageHeader
        title="Work"
        tagline="Things I've Done"
      />
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: WorkHeader }}
      />
      {WorksList}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(work)/" } }
      limit: 10
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

Work.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          html: PropTypes.string,
          frontmatter: PropTypes.shape({
            date: PropTypes.string,
            title: PropTypes.string,
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default Work;
