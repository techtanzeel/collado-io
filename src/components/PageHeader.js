import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Title1, MetaText } from '../utils/theme';

const PageHeader = ({ tagline, title }) => (
  <Container>
    <Title>{title}</Title>
    <TagLine>{tagline}</TagLine>
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.25em;
`;

const Title = styled(Title1)`
  margin: 0em auto;
`;

const TagLine = styled(MetaText)`
  margin-bottom: 1em;
  text-transform: uppercase;
`;

PageHeader.propTypes = {
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageHeader;
