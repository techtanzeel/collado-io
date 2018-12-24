import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mobile, tablet, desktop } from '../utils/breakpoints';
import { fakeAsbestos } from '../utils/colors';

// TODO: integrate renderNavbar within Navbar the same way blog.js
const renderNavbar = () => {
  const navItems = ['home', 'blog', 'work', 'now'];
  return navItems.map((item) => (
    <NavbarLink
      activeStyle={{
        borderBottom: `0.25em solid #FFF4`,
      }}
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
  margin-bottom: 1em;
  padding: 1em 0em;

  @media (min-width: ${mobile}) {
    margin-bottom: 1.25em;
  }

  @media (min-width: ${tablet}) {
    margin-bottom: 1.5em;
  }
`;

const NavbarLink = styled(Link)`
  border-bottom: 0.25em solid #FFF0;
  border-top: 0.25em solid #FFF0;
  color: #FFF;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9em;
  margin: 0em 0.5em;
  padding: 0.25em 0.5em;
  text-decoration: none;

  &:hover {
    border-bottom: 0.25em solid #FFF;
  }

  @media (min-width: ${mobile}) {
    font-size: 0.95em;
    padding: 0.25em 0.5em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1em;
    padding: 0.25em 0.75em;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.05em;
    padding: 0.25em 0.75em;
  }
`;

// Navbar.propTypes = {};

export default Navbar;
