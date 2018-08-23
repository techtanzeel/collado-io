import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';

const Navbar = () => (
  <Navigation>
    <NaviLink
      activeStyle={{
        borderBottom: `3px solid rgba(255, 255, 255, 0.4)`,
      }}
      exact
      to="/"
    >
      {`home`}
    </NaviLink>

    <Divider />

    <NaviLink
      activeStyle={{
        borderBottom: `3px solid rgba(255, 255, 255, 0.4)`,
      }}
      to="/blog"
    >
      {`blog`}
    </NaviLink>

    <Divider />

    <NaviLink
      activeStyle={{
        borderBottom: `3px solid rgba(255, 255, 255, 0.4)`,
      }}
      to="/projects"
    >
      {`projects`}
    </NaviLink>

    <Divider />

    <NaviLink
      activeStyle={{
        borderBottom: `3px solid rgba(255, 255, 255, 0.4)`,
      }}
      exact
      to="/now"
    >
      {`now`}
    </NaviLink>
  </Navigation>
);

const Navigation = styled.div`
  background: ${fakeAsbestos};
  display: flex;
  justify-content: center;
  margin-bottom: 1.2em;
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
`;

const Divider = styled.span`
  background: white;
  border-radius: 0.125em;
  margin-top: 0.8em;
  opacity: 0.4;
  height: 0.25em;
  width: 0.25em;
`;

Navbar.propTypes = {};

export default Navbar;
