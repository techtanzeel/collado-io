import React from 'react';
import { Link } from 'gatsby';
import styles from './Navbar.module.css';

const navItems = ['home', 'blog', 'work', 'now'];

const Navbar = () => (
  <div className={styles.navbar}>
    {navItems.map((item) => (
      <Link
        className={styles.navbar__link}
        style={{ color: 'white' }}
        activeStyle={{ borderBottom: `0.25em solid #FFF4` }}
        key={item}
        to={item === `home` ? `/` : `/${item}`}
      >
        {`${item}`}
      </Link>
    ))}
  </div>
);

export default Navbar;
