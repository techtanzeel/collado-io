import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const urlMatch = (match, location) => {
  console.log('MATCH:', match);
  console.log('LOCATION:', location);
  return location.pathname === '/';
};

const Navbar = () => (
  <Navigation>
    <NaviLink
      activeStyle={{
        borderBottom: `2px solid white`,
      }}
      exact
      isActive={urlMatch}
      to="/"
    >
      {`home`}
    </NaviLink>

    <Divider />

    <NaviLink
      activeStyle={{
        borderBottom: `2px solid white`,
      }}
      exact
      to="/blog"
    >
      {`blog`}
    </NaviLink>

    <Divider />

    <NaviLink
      exact
      to="/projects"
      activeStyle={{
        borderBottom: `2px solid white`,
      }}
    >
      {`projects`}
    </NaviLink>

    <Divider />

    <NaviLink
      exact
      to="/now"
      activeStyle={{
        borderBottom: `2px solid white`,
      }}
    >
      {`now`}
    </NaviLink>
  </Navigation>
);

const Navigation = styled.div`
  background: ${fakeAsbestos};
  display: flex;
  justify-content: center;
  margin: 0em auto 1.2em auto;
  padding: 1.2em 0.5em;
`;

const NaviLink = styled(Link)`
  color: white;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  margin: 0em 1em;
  text-decoration: none;

  &:hover {
    color: ${turquoise};
  }

  &:active {
    color: ${turquoise};
    &:hover {
    color: white;
    }
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
