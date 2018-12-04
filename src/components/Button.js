import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';

// Size is passed via props, but the Button itself is not yet responsive
// import { mobile, tablet, desktop } from '../utils/breakpoints';
import { fakeAsbestos, bianchiGreen } from '../utils/colors';
import { MetaTextMono } from '../utils/theme';

const Button = ({
  children, href, size, theme,
}) => (
    <Container>
      <SuperLink
        href={href}
      >
        <ButtonText
          theme={theme}
          size={size}
        >
          {children}
        </ButtonText>
      </SuperLink>
    </Container>
  );

const Container = styled.div`
  display: flex;
`;

const ButtonText = styled(MetaTextMono)`
  background: ${props => (props.theme === 'dark' ? fakeAsbestos : `${bianchiGreen}88`)};
  border-bottom: ${props => (props.size === 'large' ? `0.5em` : `0.25em`)} solid transparent};
  border-top: ${props => (props.size === 'large' ? `0.5em` : `0.25em`)} solid transparent};
  color: ${props => (props.theme === 'dark' ? `#FFF` : `${fakeAsbestos}`)};
  padding: ${props => (props.size === 'large' ? `1.25em 1.75em` : `0.5em 0.75em`)};

  &:hover {
    border-bottom-size: ${props => (props.size === 'large' ? `0.5em` : `0.25em`)};
    border-bottom-color: ${props => (props.theme === 'dark' ? `#FFF` : `${fakeAsbestos}`)};
  }
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default Button;
