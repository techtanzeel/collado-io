import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SuperLink from './SuperLink';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import { fakeAsbestos } from '../utils/colors';

// Related component: WorkCard.js
const Card = ({ children, hover, path }) => (
  <Container
    hover={hover}
  >
    {path === null
      ? (
        <div>
          {children}
        </div>
      ) : (
        <SuperLink href={path}>
          {children}
        </SuperLink>
      )
    }
  </Container>
);

const Container = styled.div`
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  box-shadow: ${fakeAsbestos}22 0em 0.125em 0.25em 0em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;
  padding: 0.75em 1.25em;
  transition: box-shadow 0.3s ease;

  &:hover, &:active {
    box-shadow: ${(props) => (props.hasHover ? `${fakeAsbestos}22 0em 0.5em 1em 0em` : `${fakeAsbestos}22 0em 0.125em 0.25em 0em`)}
  }

  @media (min-width: ${mobile}) {
    margin-bottom: 1.5em;
    padding: 1em 1.5em;
  }

  @media (min-width: ${tablet}) {
    margin-bottom: 1.75em;
    padding: 1.25em 1.75em;
  }

  @media (min-width: ${desktop}) {
    margin-bottom: 2em;
    padding: 1.25em 2em;
  }
`;

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  hover: PropTypes.bool.isRequired,
  path: PropTypes.string,
};

Card.defaultProps = {
  path: null,
};

export default Card;
