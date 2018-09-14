import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Home = ({ data }) => {
  const marcImg = data.img.childImageSharp.resolutions.src;
  const homeText = data.copy.edges[0].node.html;
  return (
    <Layout>
      <HomePage>
        <PageHeader
          title="Marc Collado"
          tagline="Singularly Curious"
          img
          imgURL={marcImg}
          imgAlt="Marc Collado"
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: homeText }}
        />
      </HomePage>
    </Layout>
  );
};

const HomePage = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2em;
`;

export const homeQuery = graphql`
  query homeQuery {
    copy: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(home)/" } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    img: file(relativePath: { eq: "marc.jpg" }) {
      childImageSharp {
        resolutions {
          src
        }
      }
    }
  }
`;

Home.propTypes = {};

export default Home;
