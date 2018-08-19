import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);

const Container = styled.div`
  min-width: 320px;

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 960px) {

  }

  @media (min-width: 1200px) {

  }
`;

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
