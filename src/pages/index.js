import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';

const HomePage = ({ data }) => {
  const pageCopy = data.pageCopy.edges[0].node.html;
  const cartoonMarc = data.cartoonMarc.childImageSharp.fluid;

  return (
    <Layout>
      <Header tagline="Singularly Curious" title="Marc Collado" />
      <Img
        alt="Marc Collado"
        fluid={cartoonMarc}
        style={{ width: `15em`, margin: `0 auto -1em` }}
      />
      <div dangerouslySetInnerHTML={{ __html: pageCopy }} />
    </Layout>
  );
};

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
    cartoonMarc: file(relativePath: { eq: "marc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

HomePage.propTypes = {
  data: PropTypes.shape({
    pageCopy: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired
          })
        })
      )
    }),
    cartoonMarc: PropTypes.object.isRequired
  }).isRequired
};

export default HomePage;
