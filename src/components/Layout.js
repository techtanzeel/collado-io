import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import SnackBar from './SnackBar';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import SEO from '../utils/seo';

library.add(faTimes);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderSnackBar: true };
  }

  componentDidMount() {
    const token = localStorage.getItem('collado.io:token');
    if (token) {
      this.shouldSnackBarRender(JSON.parse(token));
    }
  }

  shouldSnackBarRender = (token) => {
    const timeNow = Date.now();
    const timeToken = token.timestamp;
    const timeDiff = timeNow - timeToken;
    const timeDiffInHours = Math.floor(timeDiff / (1000 * 60 * 60));
    // timeDiff < 24h honor user prefs for the day and do not show SnackBar
    // timeDiff > 24h reset SnackBar state
    if (timeDiffInHours < 24) {
      this.setState({ renderSnackBar: false });
    }
  };

  renewToken = (timeNow) => {
    const token = {
      timestamp: timeNow,
      renderSnackBar: false
    };
    localStorage.setItem('collado.io:token', JSON.stringify(token));
  };

  handleUnmountSnackBar = () => {
    const timeNow = new Date().getTime();
    this.renewToken(timeNow);
    this.setState({ renderSnackBar: false });
  };

  render() {
    const {
      children,
      title,
      description,
      image,
      pathname,
      article
    } = this.props;
    const { renderSnackBar } = this.state;

    return (
      <Container>
        <SEO
          title={title}
          description={description}
          image={image}
          pathname={pathname}
          article={article}
        />
        {renderSnackBar ? (
          <SnackBar unmount={this.handleUnmountSnackBar} />
        ) : null}
        <Navbar />
        <Content>{children}</Content>
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
  max-width: 800px;
  margin: 0em auto;
  padding: 0em 1.5em;

  @media (min-width: ${mobile}) {
    padding: 0em 3em;
  }

  @media (min-width: ${tablet}) {
    padding: 0em 4em;
  }

  @media (min-width: ${desktop}) {
    padding: 0em 5em;
  }
`;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};

Layout.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
};

export default Layout;
