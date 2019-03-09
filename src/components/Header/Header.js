import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ tagline, title }) => (
  <div className={styles.header__container}>
    <h1 className={styles.header__title}>{title}</h1>
    <p className={styles.header__tagline}>{tagline}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
};

export default Header;
