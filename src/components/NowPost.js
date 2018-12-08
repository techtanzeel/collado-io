import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';
// import { mobile, tablet, desktop } from '../utils/breakpoints';
import { Title2, MetaText } from '../utils/theme';
import styles from '../utils/md.module.css';

const NowPost = ({ date, html, title }) => (
  <Card
    hasHover={false}
  >
    <Title>
      {title}
    </Title>
    <div
      className={styles.md}
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <Published>
      {`Updated on ${date}`}
    </Published>
  </Card>
);

const Title = styled(Title2)`
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
