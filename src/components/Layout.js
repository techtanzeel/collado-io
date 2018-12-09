import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Footer from './Footer';
import Navbar from './Navbar';
import SnackBar from './SnackBar';
import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
// import {
//   hipBlack, fakeAsbestos, bianchiGreen,
// } from '../utils/colors';
// import {
//   Title1, Title2, Title3, BodyText, BodyLink, MetaText,
// } from '../utils/theme';

library.add(faTimes);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderSnackBar: true };
  }

  handleUnmountSnackBar = () => {
    this.setState({ renderSnackBar: false });
  }

  render() {
    const { children } = this.props;
    const { renderSnackBar } = this.state;

    return (
      <Container>
        <Helmet defaultTitle="Marc Collado">
          <meta name="twitter:site" content="@MarcCollado" />
          <meta name="og:type" content="website" />
          <link
            rel="canonical"
            href="https://collado.io"
          />
          <html lang="en" />
        </Helmet>
        {renderSnackBar ? <SnackBar unmount={this.handleUnmountSnackBar} /> : null}
        <Navbar />
        <Content>
          {children}
        </Content>
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  min-width: 320px;

  @media (min-width: ${mobile}) {

  }

  @media (min-width: ${tablet}) {

  }

  @media (min-width: ${desktop}) {

  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  max-width: 800px;
  padding: 0em 2em;

  @media (min-width: ${mobile}) {
    padding: 0em 3em;
  }

  @media (min-width: ${tablet}) {
    padding: 0em 4em;
  }

  @media (min-width: ${desktop}) {
    padding: 0em;
  }
`;

Layout.propTypes = {};

export default Layout;
