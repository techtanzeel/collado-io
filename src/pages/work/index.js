import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './work.module.css';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { WorkCard } from '../../components/WorkCard';

const WorkPage = ({ data }) => {
  const WorkData = data.allMarkdownRemark.edges;
  const WorkIntro = WorkData
    // Get md files with the fronmatter date set to null (index.md)
    .filter((edge) => edge.node.frontmatter.date === null)
    .map((edge) => edge.node.html);
  const renderCards = WorkData
    // Get md files with fronmatter date data set
    .filter((edge) => !!edge.node.frontmatter.date)
    // Generate a feed of WorkPosts
    .map((edge) => (
      <WorkCard
        key={edge.node.id}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
        excerpt={edge.node.frontmatter.excerpt}
      />
    ));

  return (
    <Layout>
      <Header tagline="Things I've Done" title="Work" />
      <div dangerouslySetInnerHTML={{ __html: WorkIntro }} />
      <div className={styles.container}>{renderCards}</div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(work)/" } }
      limit: 50
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            path
            title
          }
        }
      }
    }
  }
`;

WorkPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              excerpt: PropTypes.string,
              path: PropTypes.string,
              title: PropTypes.string.isRequired
            })
          })
        })
      )
    })
  }).isRequired
};

export default WorkPage;
