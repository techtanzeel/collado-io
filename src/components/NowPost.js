import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';
import { mobile, tablet, desktop } from '../utils/breakpoints';
import { Title2, MetaText } from '../utils/theme';
import styles from '../utils/md.module.css';

const NowPost = ({ date, html, title }) => (
  <Card
    hover={false}
    path={null}
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
  margin: 0.5em 0em;
`;

const Published = styled(MetaText)`
  font-size: 0.875em;
  /* reduce font-size by 0.125em */
  text-align: center;

  @media (min-width: ${mobile}) {}

  @media (min-width: ${tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${desktop}) {}
`;

NowPost.propTypes = {
  date: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NowPost;
