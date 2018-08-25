import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const renderNavbar = () => {
  const navItems = ['home', 'blog', 'projects', 'now'];
  return navItems.map((item) => (
    <NaviLink
      activeStyle={{
        borderBottom: `3px solid #FFF4`,
      }}
      exact={item === `home`}
      key={item}
      to={item === `home` ? `/` : `/${item}`}
    >
      {`${item}`}
    </NaviLink>
  ));
};

const Navbar = () => (
  <Navigation>
    {renderNavbar()}
  </Navigation>
);

const Navigation = styled.div`
  background: ${fakeAsbestos};
  display: flex;
  justify-content: center;
  margin-bottom: 1.3em;
  padding: 1em 0.5em;
`;

const NaviLink = styled(Link)`
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  margin: 0em 0.5em;
  padding: 0.2em 0.5em;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid ${turquoise};
  }

  @media (min-width: 768px) {
    padding: 0.2em 0.9em;
  }
`;

Navbar.propTypes = {};

export default Navbar;
