import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mobile, tablet, desktop } from '../../utils/breakpoints';

import styles from './WorkCard.module.css';

// Related component: Card.js
const WorkCard = ({ children, data, excerpt, path, title }) => (
  <div className={styles.card}>
    <Link className={styles.card__link} to={path}>
      <Img
        fluid={data[title.toLowerCase()].childImageSharp.fluid}
        alt={title}
      />
      <TextContainer>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__excerpt}>{excerpt}</p>
      </TextContainer>
    </Link>
  </div>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query WorkCardQuery {
        ironhack: file(relativePath: { eq: "ironhack.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        iomando: file(relativePath: { eq: "iomando.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <WorkCard data={data} {...props} />}
  />
);

// Unlike Card.js padding is set within the TextContainer
// because of the top image that takes the full width
const TextContainer = styled.div`
  padding: 0.75em 1.25em;

  @media (min-width: ${mobile}) {
    padding: 1em 1.5em;
  }

  @media (min-width: ${tablet}) {
    padding: 1.25em 1.75em;
  }

  @media (min-width: ${desktop}) {
    padding: 1.25em 2em;
  }
`;

WorkCard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.shape({
    iomando: PropTypes.object,
    ironhack: PropTypes.object
  }).isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
