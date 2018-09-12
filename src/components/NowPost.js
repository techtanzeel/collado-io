import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from '../templates/md.module.css';
import {
  mobile, tablet, desktop,
} from '../utils/breakpoints';
import {
  black,
  fakeAsbestos,
  turquoise,
  eggShell,
} from '../utils/colors';
import {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
} from '../utils/theme';

const NowPost = ({ date, html }) => (
  <Container>
    {date}
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Container>
);

const Container = styled.div`
  background: ${fakeAsbestos}44;
  border: 1px solid black;
  display: flex;
  margin-bottom: 2em;
  padding-left: 0.8em;
  transition: border-left 0.3s ease;
`;


NowPost.propTypes = {};

export default NowPost;
