import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  fakeAsbestos, turquoise,
} from '../utils/colors';
import {
  mobile, tablet,
} from '../utils/breakpoints';

const renderNavbar = () => {
  const navItems = ['home', 'blog', 'work', 'now'];
  return navItems.map((item) => (
    <NavbarLink
      activeStyle={{
        borderBottom: `3px solid #FFF4`,
      }}
      exact={item === `home`}
      key={item}
      to={item === `home` ? `/` : `/${item}`}
    >
      {`${item}`}
    </NavbarLink>
  ));
};

const Navbar = () => (
  <Container>
    {renderNavbar()}
  </Container>
);

const Container = styled.div`
  background: ${fakeAsbestos};
  display: flex;
  justify-content: center;
  margin-bottom: 1.3em;
  padding: 1em 0.5em;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  margin: 0em 0.5em;
  padding: 0.2em 0.5em;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid ${turquoise};
  }

  @media (min-width: ${mobile}) {
    font-size: 1em;
    padding: 0.2em 0.6em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.1em;
    padding: 0.2em 0.7em;
  }
`;

Navbar.propTypes = {};

export default Navbar;
