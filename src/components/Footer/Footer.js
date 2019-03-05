import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <a className={styles.footer__link} href="https://twitter.com/marccollado">
      twitter
    </a>
    <a
      className={styles.footer__link}
      href="https://linkedin.com/in/marccollado"
    >
      linkedin
    </a>
    <a className={styles.footer__link} href="https://github.com/marccollado">
      github
    </a>
  </div>
);

export default Footer;
