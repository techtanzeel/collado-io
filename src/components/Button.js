import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  fakeAsbestos, eggShell, turquoise,
} from '../utils/colors';
import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

const Button = ({ children, url }) => (
  <ButtonLink
    to={url}
  >
    <ButtonText>
      {children}
    </ButtonText>
  </ButtonLink>
);

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const ButtonText = styled(MetaText)`
  background: ${eggShell}88;
  border-bottom: 0.3em solid ${turquoise}00;
  border-top: 0.3em solid ${turquoise}00;
  margin: 0em 0.5em 0.4em 0em;
  padding: 0em 0.6em;

  &:hover {
    border-bottom: 0.3em solid ${turquoise};
  }
`;

Button.propTypes = {};

export default Button;
