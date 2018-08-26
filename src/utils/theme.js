import styled from 'styled-components';

import {
  mobile, tablet, desktop,
} from './breakpoints';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from './colors';

const Title1 = styled.h1`
  box-shadow: inset 0em -0.6em 0em ${eggShell};
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 2.2em;
  }

  @media (min-width: ${tablet}) {
    font-size: 2.4em;
  }

  @media (min-width: ${desktop}) {
    font-size: 2.6em;
  }
`;

const Title2 = styled.h2`
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 1.6em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.8em;
  }

  @media (min-width: ${desktop}) {
    font-size: 2em;
  }
`;

const Title3 = styled.h3`
  color: ${black};
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 1.4em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.6em;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.8em;
  }
`;

const BodyText = styled.p`
  color: ${fakeAsbestos};
`;

const BodyLink = styled.a`
  border-bottom: 3px solid ${eggShell};
  box-shadow: inset 0 -4px 0 ${eggShell};
  color: inherit;
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
`;

const MetaText = styled.p`
  color: ${fakeAsbestos}88;
  font-size: 0.8em;

  @media (min-width: ${mobile}) {
    font-size: 0.9em;
  }

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }
`;

export {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
};
