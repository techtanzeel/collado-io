import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SuperLink = ({ children, href }) => (
  href.startsWith('/')
    ? (
      <RelativeLink
        to={href}
      >
        {children}
      </RelativeLink>
    )
    : (
      <a
        href={href}
      >
        {children}
      </a>
    )
);

const RelativeLink = styled(Link)`
  text-decoration: none;
`;

SuperLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default SuperLink;
