import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const Navbar = ({ }) => (
  <Navigation>
    <NavLink
      to="/"
    >
      {`home`}
    </NavLink>

    <Divider />

    <NavLink
      to="/blog"
    >
      {`blog`}
    </NavLink>

    <Divider />

    <NavLink
      to="#"
    >
      {`projects`}
    </NavLink>

    <Divider />

    <NavLink
      to="#"
    >
      {`now`}
    </NavLink>
  </Navigation>
);

const Navigation = styled.div`
  background: ${fakeAsbestos};
  display: flex;
  justify-content: center;
  margin: 0em auto 1.2em auto;
  opacity: 0.9;
  padding: 1.2em 1em;
`;

const NavLink = styled(Link)`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  color: white;
  margin: 0em 1.1em;
  text-decoration: none;

  &:hover {
    color: ${eggShell};
  }
`;

const Divider = styled.span`
  background: white;
  border-radius: 0.125em;
  margin-top: 0.7em;
  opacity: 0.25;
  height: 0.25em;
  width: 0.25em;
`;

Navbar.propTypes = {};

export default Navbar;
