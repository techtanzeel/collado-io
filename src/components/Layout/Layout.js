import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';
import styles from './Layout.module.css';
import { Snackbar } from '../Snackbar';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import SEO from '../../utils/seo';

library.add(faTimes, faCalendarCheck);

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
      <div className={styles.out__container}>
        <SEO
          title={title}
          description={description}
          image={image}
          pathname={pathname}
          article={article}
        />
        {renderSnackBar ? (
          <Snackbar unmount={this.handleUnmountSnackBar} />
        ) : null}
        <Navbar />
        <div className={styles.in__container}>{children}</div>
        <Footer />
      </div>
    );
  }
}

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
