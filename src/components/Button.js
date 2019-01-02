import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';
import { tablet } from '../utils/breakpoints';
import { fakeAsbestos, hipBlack, bianchiGreen } from '../utils/colors';
import { MetaTextMono } from '../utils/theme';

const Button = ({ children, href, theme }) => (
  <Container>
    <SuperLink
      href={href}
    >
      <ButtonText
        theme={theme}
      >
        {`${children}`.toLowerCase()}
      </ButtonText>
    </SuperLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-right: 0.25em;
  margin-bottom: 0.25em;

  @media (min-width: ${tablet}) {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const ButtonText = styled(MetaTextMono)`
  background: ${(props) => (props.theme === 'dark' ? `${fakeAsbestos}22` : `${bianchiGreen}`)};
  border-radius: 0.25em;
  color: ${hipBlack};
  margin-bottom: 0em;
  padding: 0.75em 1em;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${(props) => (props.theme === 'dark' ? `${fakeAsbestos}44` : `${bianchiGreen}88`)};
  }

  @media (min-width: ${tablet}) {
    padding: 1em 1.25em;
  }
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default Button;
