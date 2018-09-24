import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader';
import Layout from '../templates/Layout';
import styles from '../templates/md.module.css';

const Home = ({ data }) => {
  const homeImg = data.img.childImageSharp.resolutions.src;
  const homeText = data.text.edges[0].node.html;
  return (
    <Layout>
      <PageHeader
        title="Marc Collado"
        tagline="Singularly Curious"
        img
        imgURL={homeImg}
        imgAlt="Marc Collado"
      />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: homeText }}
      />
    </Layout>
  );
};

export const homeQuery = graphql`
  query homeQuery {
    img: file(relativePath: { eq: "marc.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          srcSet
        }
        resolutions {
          src
        }
      }
    }
    text: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(home)/" } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;

Home.propTypes = {};

export default Home;
