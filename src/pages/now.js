import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NowPost from '../components/NowPost';
import PageHeader from '../components/PageHeader';
import Layout from '../templates/Layout';


const Now = ({ data }) => {
  const Nows = data.allMarkdownRemark.edges;
  const NowsList = Nows
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <NowPost
        key={edge.node.id}
        date={edge.node.frontmatter.date}
        html={edge.node.html}
      />
    ));

  return (
    <Layout>
      <NowPage>
        <PageHeader
          title="Now"
          tagline="What I'm Up To"
        />
        {NowsList}
      </NowPage>
    </Layout>
  );
};

const NowPage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2em;
`;

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
            date
          }
        }
      }
    }
  }
`;

Now.propTypes = {};

export default Now;
