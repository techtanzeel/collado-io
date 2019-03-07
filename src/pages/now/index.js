import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { NowCard } from '../../components/NowCard';

const NowPage = ({ data }) => {
  const NowData = data.allMarkdownRemark.edges;
  const NowIntro = NowData
    // Get md files with the fronmatter date set to null (index.md)
    .filter((edge) => edge.node.frontmatter.date === null)
    .map((edge) => edge.node.html);
  const NowList = NowData
    // Get md files with fronmatter date data set
    .filter((edge) => !!edge.node.frontmatter.date)
    // Generate a feed of WorkPosts
    .map((edge) => (
      <NowCard
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        html={edge.node.html}
        title={edge.node.frontmatter.title}
      />
    ));

  return (
    <Layout>
      <PageHeader tagline="Things I'm Doing" title="Now" />
      <div dangerouslySetInnerHTML={{ __html: NowIntro }} />
      {NowList}
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

NowPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            html: PropTypes.string,
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              title: PropTypes.string
            })
          })
        })
      )
    })
  }).isRequired
};

export default NowPage;
