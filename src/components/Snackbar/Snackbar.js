import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Snackbar.module.css';

const Snackbar = ({ unmount }) => (
  <div className={styles.snackbar__container}>
    <p className={styles.snackbar__text}>
      {`Something's changed? 🤔 Yes, yes! After more than five years, I've rebuilt the place, from scratch 🔥 But you know, with great power comes great responsibility, so please, before you proceed `}
      <a href="/blog/2018/collado-io-live">read the manual</a>
      {` 📚 Otherwise, be safe, and enjoy 🖖`}
    </p>
    <button onClick={unmount} className={styles.snackbar__close}>
      <FontAwesomeIcon
        className={styles.snackbar__icon}
        icon="times"
        size="1x"
      />
    </button>
  </div>
);

Snackbar.propTypes = {
  unmount: PropTypes.func.isRequired
};

export default Snackbar;
