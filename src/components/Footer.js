import React from 'react';
import styled from 'styled-components';

import { fakeAsbestos, bianchiGreen } from '../utils/colors';
import { mobile, tablet, desktop } from '../utils/breakpoints';

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
  background: ${bianchiGreen}88;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3em;
  padding: 1em 0em;

  @media (min-width: ${mobile}) {
    padding: 2em 0em;
    flex-direction: row;
  }
`;

const FooterLink = styled.a`
  border-bottom: 0.25em solid transparent;
  border-top: 0.25em solid transparent;
  color: ${fakeAsbestos};
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9em;
  margin: 0.5em 0em;
  padding: 0.25em 0.5em;
  text-decoration: none;

  &:hover {
    border-bottom: 0.25em solid ${fakeAsbestos};
  }

  @media (min-width: ${mobile}) {
    font-size: 0.95em;
    margin: 0em 0.5em;
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

export default Footer;
