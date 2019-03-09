import React from 'react';
import PropTypes from 'prop-types';
import styles from './NowCard.module.css';
import { PublishedAt } from '../PublishedAt';

const NowCard = ({ title, html, date }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <PublishedAt date={date} />
  </div>
);

NowCard.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default NowCard;
