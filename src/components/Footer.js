import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  fakeAsbestos, eggShell,
} from '../utils/colors';
import {
  mobile, tablet,
} from '../utils/breakpoints';

const Footer = () => (
  <Container>
    <FooterLink
      href="https://github.com/marccollado"
    >
      github
    </FooterLink>
    <FooterLink
      href="https://twitter.com/marccollado"
    >
      twitter
    </FooterLink>
    <FooterLink
      href="https://linkedin.com/in/marccollado"
    >
      linkedin
    </FooterLink>
    <FooterLink
      href="https://www.strava.com/athletes/1113999"
    >
      strava
    </FooterLink>
  </Container>
);

const Container = styled.div`
  align-items: center;
  background: ${eggShell}88;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.6em;
  padding: 1.5em 0.5em;

  @media (min-width: ${mobile}) {
    padding: 2em 0.5em;
    flex-direction: row;
  }
`;

const FooterLink = styled.a`
  border-bottom: 3px solid ${fakeAsbestos}00;
  color: ${fakeAsbestos};
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8em;
  margin: 0.5em 0em;
  padding: 0.2em 0.5em;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid ${fakeAsbestos};
  }

  @media (min-width: ${mobile}) {
    font-size: 0.9em;
    margin: 0.1em 0.5em;
    padding: 0.2em 0.6em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1em;
    padding: 0.2em 0.7em;

  }
`;

Footer.propTypes = {};

export default Footer;