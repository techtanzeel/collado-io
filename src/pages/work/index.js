import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { WorkCard } from '../../components/WorkCard';
import { mobile } from '../../utils/breakpoints';
import styles from '../../utils/md.module.css';

const Work = ({ data }) => {
  const WorkData = data.allMarkdownRemark.edges;
  const WorkIntro = WorkData
    // Markdown file with the fronmatter date set to null (index.md)
    .filter((edge) => edge.node.frontmatter.date === null)
    .map((edge) => edge.node.html);
  const WorkList = WorkData
    // Markdown file with fronmatter date data
    .filter((edge) => !!edge.node.frontmatter.date)
    // Generate a feed of WorkPosts
    .map((edge) => (
      <WorkCard
        key={edge.node.id}
        excerpt={edge.node.frontmatter.excerpt}
        path={edge.node.frontmatter.path}
        title={edge.node.frontmatter.title}
      />
    ));

  return (
    <Layout>
      <PageHeader tagline="Things I've Done" title="Work" />
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: WorkIntro }}
      />
      <WorkListContainer>{WorkList}</WorkListContainer>
    </Layout>
  );
};

const WorkListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

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

Work.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            html: PropTypes.string,
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              excerpt: PropTypes.string,
              path: PropTypes.string,
              title: PropTypes.string
            })
          })
        })
      )
    })
  }).isRequired
};

export default Work;
