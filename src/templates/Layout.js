import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
    <Footer />
  </Container>
);

const Container = styled.div`
  min-width: 320px;

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {

  }
`;

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
