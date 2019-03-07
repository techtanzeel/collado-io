import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './WorkCard.module.css';

const WorkCard = ({ data, excerpt, path, title }) => (
  <div className={styles.card}>
    <Link className={styles.card__link} to={path}>
      <Img
        fluid={data[title.toLowerCase()].childImageSharp.fluid}
        alt={title}
      />
      <div className={styles.card__wrapper}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__excerpt}>{excerpt}</p>
      </div>
    </Link>
  </div>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query WorkCardQuery {
        pansa: file(relativePath: { eq: "pansa.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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

WorkCard.propTypes = {
  data: PropTypes.shape({
    iomando: PropTypes.object,
    ironhack: PropTypes.object
  }).isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
