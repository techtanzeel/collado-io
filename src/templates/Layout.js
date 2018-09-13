import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  black, fakeAsbestos, turquoise, eggShell,
} from '../utils/colors';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
    <Footer />
  </Container>
);

const Container = styled.div`
  min-width: 320px;

  @media (min-width: ${mobile}) {

  }

  @media (min-width: ${tablet}) {

  }

  @media (min-width: ${desktop}) {

  }
`;

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
