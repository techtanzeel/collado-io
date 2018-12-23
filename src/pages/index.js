import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import styles from '../utils/md.module.css';

const Home = ({ data }) => {
  const pictureMarc = data.pictureMarc.childImageSharp.fluid;
  const pageCopy = data.pageCopy.edges[0].node.html;

  return (
    <Layout>
      <PageHeader
        tagline="Singularly Curious"
        title="Marc Collado"
      />
      <ImageContainer>
        <Img
          alt="Marc Collado"
          fluid={pictureMarc}
          imgStyle={{ marginBottom: 0 }}
        />
      </ImageContainer>
      <div
        className={styles.md}
        dangerouslySetInnerHTML={{ __html: pageCopy }}
      />
    </Layout>
  );
};

const ImageContainer = styled.div`
  margin: 0em auto;
  min-width: 12em;
  width: 50%;

  @media (min-width: ${mobile}) {
    max-width: 16em;
  }

  @media (min-width: ${tablet}) {
    max-width: 17em;
  }

  @media (min-width: ${desktop}) {
    max-width: 18em;
  }
`;

export const query = graphql`
  {
    pageCopy: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(src)/(markdown)/(home)/" } }
      limit: 1
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
    pictureMarc: file(relativePath: { eq: "marc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

Home.propTypes = {
  data: PropTypes.shape({
    pageCopy: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            html: PropTypes.string,
          }),
        }),
      ),
    }),
    pictureMarc: PropTypes.object,
  }).isRequired,
};

export default Home;
