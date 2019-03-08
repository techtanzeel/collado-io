import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './Tag.module.css';

const Tag = ({ children }) => (
  <div className={styles.tag}>
    <Link className={styles.tag__link} to={`/tags/${children}`}>
      {`${children}`.toLowerCase()}
    </Link>
  </div>
);

Tag.propTypes = {
  children: PropTypes.string.isRequired
};

export default Tag;
