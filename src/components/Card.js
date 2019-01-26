import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { mobile, tablet, desktop } from '../utils/breakpoints';
import { fakeAsbestos } from '../utils/colors';

// Related component: WorkCard.js
const Card = ({ children, hover, path }) => (
  <Container hover={hover}>
    {path === null ? (
      <div>{children}</div>
    ) : (
      <Link to={path} style={{ textDecoration: 'none' }} activeStyle={{}}>
        {children}
      </Link>
    )}
  </Container>
);

const Container = styled.div`
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  box-shadow: ${fakeAsbestos}22 0em 0.125em 0.25em 0em;
  display: flex;
  flex-direction: column;
  margin: 0.75em 0em 0.25em;
  padding: 1em 1.25em 0.75em;
  transition: box-shadow 0.3s ease;

  &:hover,
  &:active {
    box-shadow: ${(props) =>
      props.hasHover
        ? `${fakeAsbestos}22 0em 0.5em 1em 0em`
        : `${fakeAsbestos}22 0em 0.125em 0.25em 0em`};
  }

  @media (min-width: ${mobile}) {
  }

  @media (min-width: ${tablet}) {
    margin: 1em 0em;
    padding: 1.5em 1.75em 1em;
  }

  @media (min-width: ${desktop}) {
  }
`;

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  hover: PropTypes.bool.isRequired,
  path: PropTypes.string
};

Card.defaultProps = {
  path: null
};

export default Card;
