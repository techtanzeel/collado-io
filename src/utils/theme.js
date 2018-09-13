import styled from 'styled-components';

import {
  mobile, tablet, desktop,
} from './breakpoints';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from './colors';

const Title1 = styled.h1`
  box-shadow: inset 0em -0.5em 0em ${eggShell};
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 2.25em;
  }

  @media (min-width: ${tablet}) {
    font-size: 2.5em;
  }

  @media (min-width: ${desktop}) {
    font-size: 2.75em;
  }
`;

const Title2 = styled.h2`
  color: ${black};
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: -1px;
  margin-top: 1.5em;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 1.75em;
  }

  @media (min-width: ${tablet}) {
    font-size: 2em;
  }

  @media (min-width: ${desktop}) {
    font-size: 2.25em;
  }
`;

const Title3 = styled.h3`
  color: ${black};
  font-size: 1.25em;
  font-weight: 700;
  letter-spacing: -1px;
  margin-top: 1.5em;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 1.5em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.75em;
  }

  @media (min-width: ${desktop}) {
    font-size: 2em;
  }
`;

const BodyText = styled.p`
  color: ${fakeAsbestos};
  font-size: 0.9em;

  @media (min-width: ${mobile}) {
    font-size: 0.95em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.05em;
  }
`;

const BodyLink = styled.a`
  border-bottom: 0.25em solid ${eggShell};
  box-shadow: inset 0 -0.25em 0 ${eggShell};
  color: inherit;
  font-size: 0.9em;
  text-decoration: none;
  transition: background 0.3s ease;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
    background: ${eggShell};
  }

  &:active {
    color: inherit;
  }

  @media (min-width: ${mobile}) {
    font-size: 0.95em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.05em;
  }
`;

const MetaText = styled.p`
  color: ${fakeAsbestos}88;
  font-size: 0.8em;

  @media (min-width: ${mobile}) {
    font-size: 0.85em;
  }

  @media (min-width: ${tablet}) {
    font-size: 0.9em;
  }

  @media (min-width: ${desktop}) {
    font-size: 0.95em;
  }
`;

export {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
};
