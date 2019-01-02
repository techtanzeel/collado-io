import styled from 'styled-components';

import {
  mobile, tablet, desktop,
} from './breakpoints';
import {
  hipBlack, fakeAsbestos, bianchiGreen,
} from './colors';

const Title1 = styled.h1`
  box-shadow: inset 0em -0.5em 0em ${bianchiGreen};
  color: ${hipBlack};
  font-weight: 700;
  /* font-size === 28px */
  letter-spacing: -1px;
  padding: 0em 0.5em;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 2em;
    /* font-size === 32px */
  }

  @media (min-width: ${tablet}) {
    font-size: 2.5em;
    /* font-size === 40px */
    padding: 0em 0.75em;
  }

  @media (min-width: ${desktop}) {
    font-size: 2.75em;
    /* font-size === 44px */
    padding: 0em 1em;
  }
`;

const Title2 = styled.h2`
  color: ${hipBlack};
  /* font-size === 24.112px */
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 1.75em;
    /* font-size === 28px */
  }

  @media (min-width: ${tablet}) {
    font-size: 2em;
    /* font-size === 32px */
  }

  @media (min-width: ${desktop}) {
    font-size: 2.25em;
    /* font-size === 36px */
  }
`;

const Title3 = styled.h3`
  color: ${hipBlack};
  // font-size === 21.112px
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media (min-width: ${mobile}) {
    font-size: 1.5em; // 24px
  }

  @media (min-width: ${tablet}) {
    font-size: 1.75em; // 28px
  }

  @media (min-width: ${desktop}) {
    font-size: 2em; // 32px
  }
`;

const BodyText = styled.p`
  color: ${fakeAsbestos};

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 1.125em;
  }

  @media (min-width: ${desktop}) {}
`;

const BodyLink = styled.a`
  border-bottom: 0.25em solid ${bianchiGreen};
  box-shadow: inset 0 -0.25em 0 ${bianchiGreen};
  color: inherit;
  text-decoration: none;
  transition: background 0.3s ease;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
    background: ${bianchiGreen};
  }

  &:active {
    color: inherit;
  }

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {}

  @media (min-width: ${desktop}) {}
`;

const MetaText = styled.p`
  color: ${fakeAsbestos}88;
  font-size: 0.875em;

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {}
`;

const MetaTextMono = styled.p`
  color: ${fakeAsbestos}88;
  font-family: 'IBM Plex Mono', 'monospace';
  font-size: 0.875em;
  text-transform: lowercase;

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {}
`;

export {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText, MetaTextMono,
};
