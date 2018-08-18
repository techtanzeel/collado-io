import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const Navbar = ({ }) => {
  console.log();
  return (
    <Container>
      <Nav>
        <NavLink
          to="/"
        >
          {`Home`}
        </NavLink>

        <Divider />

        <NavLink
          to="#"
        >
          {`Blog`}
        </NavLink>

        <Divider />

        <NavLink
          to="#"
        >
          {`Projects`}
        </NavLink>

        <Divider />

        <NavLink
          to="#"
        >
          {`Now`}
        </NavLink>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  background: ${fakeAsbestos};
  margin-bottom: 1.2em;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  minWidth: 320px;
  maxWidth: 960px;
  padding: 1.2em 1em;
`;

const NavLink = styled(Link)`
  font-family: 'Roboto Mono', monospace;
  font-size: 1em;
  color: white;
  margin: 0em 1em;
  text-decoration: none;
`;

const Divider = styled.span`
  background: ${eggShell};
  border-radius: 0.15em;
  margin-top: 0.7em;
  transparency: 0.5;
  height: 0.3em;
  width: 0.3em;
`;

Navbar.propTypes = {};

export default Navbar;
