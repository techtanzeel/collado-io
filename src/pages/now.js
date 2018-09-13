import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NowPost from '../components/NowPost';
import PageHeader from '../components/PageHeader';
import Layout from '../templates/Layout';
import styles from '../templates/md.module.css';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

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
      <NowPage>
        <PageHeader
          title="Now"
          tagline="What I'm Up To"
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: NowHeader }}
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
