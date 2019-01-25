import React from 'react';
import { Link } from 'gatsby';
import styles from '../utils/nav.module.css';

const navItems = ['home', 'blog', 'work', 'now'];

const Navbar = () => (
  <div className={styles.navbar}>
    {navItems.map((item) => (
      <Link
        className={styles.navlink}
        style={{ color: `#FFF` }}
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
