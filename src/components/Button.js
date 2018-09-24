import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  fakeAsbestos, eggShell, turquoise,
} from '../utils/colors';
import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  MetaText,
} from '../utils/theme';

const Button = ({
  children, large, primary, url,
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
  border-bottom: ${props => (props.size ? `0.5em` : `0.25em`)} solid ${turquoise}00};
  border-top: ${props => (props.size ? `0.5em` : `0.25em`)} solid ${turquoise}00};
  color: ${props => (props.type ? `#FFF` : `${fakeAsbestos}88`)};
  padding: ${props => (props.size ? `1.25em 1.75em` : `0.5em 0.75em`)};

  &:hover {
    border-bottom: ${props => (props.size ? `0.5em` : `0.25em`)} solid ${turquoise}};
  }
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  large: PropTypes.bool.isRequired,
  primary: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Button;
