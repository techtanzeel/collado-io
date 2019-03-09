import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './BlogCard.module.css';
import { PublishedAt } from '../PublishedAt';

const BlogCard = ({ path, title, excerpt, date }) => (
  <div className={styles.card}>
    <Link className={styles.card__link} to={path}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__excerpt}>{excerpt}</p>
      <PublishedAt date={date} />
    </Link>
  </div>
);

BlogCard.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

BlogCard.defaultProps = {
  excerpt: ''
};

export default BlogCard;
