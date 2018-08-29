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

const Button = ({
  children, primary, large, url,
}) => (
  <Container>
    <ButtonLink
      to={url}
    >
      <ButtonText
        type={primary}
        size={large}
      >
        {children}
      </ButtonText>
    </ButtonLink>
  </Container>
);

const Container = styled.div`
  display: flex;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const ButtonText = styled(MetaText)`
  background: ${props => (props.type ? fakeAsbestos : `${eggShell}88`)};
  border-bottom: 0.3em solid ${turquoise}00;
  border-top: 0.3em solid ${turquoise}00;
  color: ${props => (props.type ? `#FFF` : `${fakeAsbestos}`)};
  padding: 0.5em 1.2em;

  &:hover {
    border-bottom: 0.3em solid ${turquoise};
  }
`;

Button.propTypes = {};

export default Button;
