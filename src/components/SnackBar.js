import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { mobile } from '../utils/breakpoints';
import { fakeAsbestos } from '../utils/colors';
import { BodyText } from '../utils/theme';

const SnackBar = ({ unmount }) => (
  <Container>
    <SnackText>
      {`Something's changed? 🤔 Yes, yes! After more than five years, I've rebuilt the place, from scratch 🔥 But you know, with great power comes great responsibility, so please, before you proceed `}
      <SnackLink href="/blog/2018/collado-io-live">read the manual</SnackLink>
      {` 📚 Otherwise, be safe, and enjoy 🖖`}
    </SnackText>
    <Dismiss
      onClick={unmount}
    >
      <StyledIcon icon="times" size="1x" />
    </Dismiss>
  </Container>
);

const Container = styled.div`
  align-items: center;
  background-color: #F1C40F88;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;

  @media (min-width: ${mobile}) {
    flex-direction: row;
    padding: 1em 1.5em;
  }
`;

const SnackText = styled(BodyText)`
  font-size: 0.8em;
  margin: 0em 0em 1em 0em;
  max-width: 740px;
  text-align: center;

  @media (min-width: ${mobile}) {
    flex-direction: row;
    margin: 0em 1em 0em 0em;
  }
`;

const SnackLink = styled.a`
  border-bottom: 1px solid ${fakeAsbestos};
  box-shadow: inset 0 -1px 0 ${fakeAsbestos};
  color: inherit;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #FFFFFF;
    background: ${fakeAsbestos};
  }

  &:active {
    color: inherit;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${fakeAsbestos};
  transition: color 0.3s ease;

  &:visited {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;

const Dismiss = styled.button`
  background-color: #F1C40F;
  border: none;
  border-radius: 14px;
  display: flex;
  padding: 6px 9px;
  transition: background-color 0.3s ease;

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: ${fakeAsbestos};
  }

  &:hover ${StyledIcon} {
    color: #FFFFFF;
  }

  &:active {
    color: inherit;
  }
`;

SnackBar.propTypes = {
  unmount: PropTypes.func.isRequired,
};

export default SnackBar;
