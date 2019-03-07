import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PublishedAt.module.css';

const PublishedAt = ({ date }) => (
  <span>
    <FontAwesomeIcon className={styles.icon} icon="calendar-check" />
    <p className={styles.date}>Published on {date}</p>
  </span>
);

PublishedAt.propTypes = {
  date: PropTypes.string.isRequired
};

export default PublishedAt;
