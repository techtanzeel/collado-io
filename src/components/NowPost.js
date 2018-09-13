import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from '../templates/md.module.css';

import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import { fakeAsbestos } from '../utils/colors';
import { Title2, MetaText } from '../utils/theme';

const NowPost = ({ date, html, title }) => (
  <Container>
    <NowTitle>
      {title}
    </NowTitle>
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <Published>
      {`Updated on ${date}`}
    </Published>
  </Container>
);

const Container = styled.div`
  background: ${fakeAsbestos}44;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;
  padding: 1em 1.25em;

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

const NowTitle = styled(Title2)`
  margin-top: 0.5em;
`;

const Published = styled(MetaText)`
  text-align: center;
`;

NowPost.propTypes = {
  date: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NowPost;
