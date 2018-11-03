import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import styles from '../utils/md.module.css';

const Home = ({ data }) => {
  const homeImg = data.img.childImageSharp.resolutions.src;
  const homeText = data.text.edges[0].node.html;
  return (
    <Layout>
      <PageHeader
        imgAlt="Marc Collado"
        imgURL={homeImg}
        tagline="Singularly Curious"
        title="Marc Collado"
      />
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: homeText }}
      />
    </Layout>
  );
};

export const query = graphql`
  {
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
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(home)/" } }
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
